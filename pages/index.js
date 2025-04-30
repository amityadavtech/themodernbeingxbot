import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import WorkflowSection from "@/components/Home/WorkflowSection";
import PlanSection from "@/components/Home/PlanSection";
import AskQuestion from "@/components/Home/AskQuestion";
import Footer from "@/components/Footer";

export default function Home() {
  const seoData = {
    title: "BeingxBot | Software Company & Modern Web Development & SEO Agency ",
    description:
      "Boost your business with BeingxBot — experts in web development, SEO optimization, responsive design, and digital marketing. Launch fast. Grow smart.",
    keywords:
      "Web Developer in Lucknow, Website Developer in Lucknow, App Developer in Lucknow, Web development agency, Website Desiging in Lucknow, Website Design near Lucknow, Website Development in Lucknow, Website Development near Lucknow, Digital marketing near lucknow, web design in lucknow, web desing near me, SEO company, digital marketing, mobile-first design, React websites, Next.js SEO, performance optimization, BeingxBot, website services India",
    image: "/images/beingxbot-banner.png",
    url: "https://beingxbot.tech",
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
        <main>
          <HeroSection />
          <AboutSection />
          <WorkflowSection />
          <PlanSection />
          <AskQuestion />
        </main>
        <Footer />
      </div>
    </>
  );
}
