"use client";

import { useSession, signIn } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import ContactSection from "../ContactSection";

export default function AskQuestion() {
  const { data: session } = useSession();
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [notification, setNotification] = useState("");
  const [showFullText, setShowFullText] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const contactRef = useRef(null);

  const toggleShowMore = (i) =>
    setShowFullText((prev) => ({ ...prev, [i]: !prev[i] }));

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchQuestions = async (retry = 0) => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/questions");
      setQuestions(data);
    } catch (err) {
      if (err?.response?.status === 429 && retry < 3) {
        const delay = 1000 * 2 ** retry;
        setTimeout(() => fetchQuestions(retry + 1), delay);
      } else {
        console.error("Fetch error:", err);
        setNotification("Failed to fetch questions.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) return signIn("google");

    setSubmitDisabled(true);
    try {
      const res = await axios.post("/api/questions", {
        question,
        name: session.user.name,
        avatar: session.user.image,
        createdAt: new Date().toISOString(),
      });
      setNotification(res.data.message || "Submitted!");
      setQuestion("");
      fetchQuestions();
      scrollToContact();
    } catch (err) {
      const msg =
        err?.response?.status === 429
          ? "You're submitting too fast. Please wait."
          : err?.response?.data?.message || "Failed to submit.";
      setNotification(msg);
    } finally {
      setSubmitDisabled(false);
      setTimeout(() => setNotification(""), 4000);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <section className="md:pt-8 bg-[#0F0E17]">
      <div className="md:max-w-[60vw] mx-auto p-4 rounded-2xl shadow-2xl backdrop-blur-lg bg-[#1a1b25] border border-white/20 mb-3">
        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-center text-white">
          <span className="text-[var(--primary-color)]">Recent</span> Questions
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <ul className="space-y-4 mb-8">
            {questions.length ? (
              questions.map((q, i) => (
                <li
                  key={i}
                  className="p-2 rounded-xl shadow-lg bg-[#1E1E2E]/70 text-white flex gap-4 items-start ring-2 ring-[#2d2a3c] hover:scale-[1.02] hover:ring-indigo-600 transition-all"
                >
                  <img
                    src={
                      q.avatar ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">@{q.name || "Anonymous"}</p>
                      <p className="text-xs text-gray-500">
                        {format(q.createdAt)}
                      </p>
                    </div>
                    <p
                      className={`transition-all text-white ${
                        showFullText[i] ? "" : "line-clamp-2"
                      }`}
                      style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      {q.question}
                    </p>
                    {q.question.length > 70 && (
                      <button
                        onClick={() => toggleShowMore(i)}
                        className="text-[#aaa] mt-2 hover:underline text-sm"
                      >
                        {showFullText[i] ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No questions yet. Be the first to ask!
              </p>
            )}
          </ul>
        )}

        <h3 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-center text-white">
          <span className="text-[var(--primary-color)]">Ask</span> Your Question
        </h3>

        {notification && (
          <div
            className={`p-3 mb-4 text-center rounded-lg font-medium shadow-md ${
              notification.includes("fast") ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {notification}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              className="w-full p-4 bg-[#151621] text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-4 focus:ring-indigo-500 resize-none outline-none"
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              maxLength={200}
              required
              disabled={submitDisabled}
            />
            <p className="absolute bottom-2 right-4 text-sm text-gray-400">
              {question.length}/200
            </p>
          </div>

          <button
            type="submit"
            disabled={submitDisabled}
            className={`w-full py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-[var(--primary-color)] shadow-lg transition-all ${
              submitDisabled ? "opacity-50 cursor-not-allowed" : "hover:to-indigo-600"
            }`}
          >
            {submitDisabled
              ? "Please Wait..."
              : session
              ? "Submit"
              : "Login to Ask"}
          </button>
        </form>
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </section>
  );
}
