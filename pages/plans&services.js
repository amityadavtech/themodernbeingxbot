import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Plans from "@/components/Plansnservices/Plans";
import Services from "@/components/Plansnservices/Services";

export default function PlansAndServices() {
  const seoData = {
    title: "Plans & Services | BeingxBot Web Development & SEO Experts",
    description:
      "Explore custom plans and digital services by BeingxBot including website development, SEO, digital marketing, app design, and UI/UX solutions tailored for your business growth.",
    keywords:
      "BeingxBot plans, web development packages,Website Desiging in Lucknow, Website Design near Lucknow, Website Development in Lucknow, Website Development near Lucknow, Digital marketing near lucknow, web design in lucknow, web desing near me, SEO plans, digital marketing services, app development, UI/UX design, affordable website plans, professional web agency",
    image: "/images/beingxbot-banner.jpg",
    url: "https://beingxbot.tech/plans&services",
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
        <Services />
        <Plans />
        <Footer />
      </div>
    </>
  );
}
