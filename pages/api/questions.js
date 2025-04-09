import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("themodernbeingxbot");
    const collection = db.collection("questions");

    if (req.method === "POST") {
      const { question, name, avatar } = req.body;

      // Validate required fields
      if (!question) return res.status(400).json({ message: "Question required" });
      if (!name) return res.status(400).json({ message: "Name is required" });
      if (!avatar) return res.status(400).json({ message: "Avatar is required" });

      // Check if user has already asked a question
      const existing = await collection.findOne({ name });
      if (existing) {
        return res.status(403).json({
          message:
            "You have already asked a question. Only one question per user is allowed.",
        });
      }

      // Insert new question
      await collection.insertOne({
        question,
        name,
        avatar,
        createdAt: new Date(),
      });

      return res.status(200).json({ message: "Question submitted successfully!" });
    }

    // GET Request - Fetch recent 5 questions
    else if (req.method === "GET") {
      const questions = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray();

      return res.status(200).json(questions);
    }

    // Handle other methods
    else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
