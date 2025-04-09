import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQS from "@/components/FAQs/FaQs";
import SEO from "@/components/SEO";
import AskQuestion from "@/components/Home/AskQuestion";

export default function FaqPage() {
  const seoData = {
    title: "FAQs | BeingxBot – Web Development & Marketing Answers",
    description:
      "Explore the most frequently asked questions about BeingxBot's web development, SEO, and digital marketing services. Get clarity, fast.",
    keywords:
      "BeingxBot FAQs, website agency help, SEO service questions, digital marketing answers, web development queries, BeingxBot support",
    image: "/images/beingxbot-faqs-banner.jpg",
    url: "https://beingxbot.tech/faqs",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does BeingxBot provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeingxBot provides web development, SEO, responsive design, digital marketing, and branding solutions tailored for startups and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a quote from BeingxBot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a quote directly on our website through the 'Request Quote' form or reach out to us via the contact page."
        }
      },
      {
        "@type": "Question",
        "name": "Is SEO included with web development packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SEO optimization is included in all of our web development packages to ensure your website ranks and performs well online."
        }
      },
      {
        "@type": "Question",
        "name": "Can BeingxBot help with social media marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! BeingxBot offers digital marketing services including social media marketing, ad campaigns, and brand awareness strategies."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url={seoData.url}
        additionalMeta={[
          { name: "og:type", content: "website" },
          { name: "og:locale", content: "en_IN" },
          { name: "twitter:title", content: seoData.title },
          { name: "twitter:description", content: seoData.description },
          { name: "twitter:image", content: seoData.image },
        ]}
        structuredData={structuredData}
      />

      <div className="bg-black min-h-screen">
        <Navbar />
        <FAQS />
        <AskQuestion />
        <Footer />
      </div>
    </>
  );
}
