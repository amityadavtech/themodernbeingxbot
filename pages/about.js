import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewAboutUs from "@/components/About-us/NewAbout";

export default function About() {
  const seoData = {
    title: "About BeingxBot | Leading Web Development & Digital Marketing Agency",
    description:
      "Learn about BeingxBot — India’s modern web development and digital marketing agency. We specialize in building fast, secure websites, boosting Google rankings with SEO, and growing your brand through data-driven marketing strategies.",
    keywords:
      "BeingxBot, web development agency India,Website Desiging in Lucknow, Website Design near Lucknow, Website Development in Lucknow, Website Development near Lucknow, Digital marketing near lucknow, web design in lucknow, web desing near me, web development agency Lucknow, SEO company, digital marketing experts, responsive website design, custom websites, Next.js development, Google SEO, online business growth, marketing agency",
    image: "/images/beingxbot-banner.png",
    url: "https://beingxbot.tech/about",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BeingxBot",
    url: seoData.url,
    logo: seoData.image,
    sameAs: [
      "https://www.instagram.com/beingxbot",
      "https://www.linkedin.com/company/beingxbot",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7079490430",
      contactType: "Customer Support",
      email: "beingxbot@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
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
        <NewAboutUs />
        <Footer />
      </div>
    </>
  );
}
