import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import SecureContactForm from "@/components/Contact/SecureContactForm";

export default function ContactPage() {
  const seoData = {
    title: "Contact BeingxBot | Web Development & SEO Support",
    description:
      "Get in touch with BeingxBot for custom web development, digital marketing, and SEO services. Reach out via form, email, or phone. Let's grow your business!",
    keywords:
      "Contact BeingxBot, website development help, SEO agency India, hire web developers, digital marketing services, custom website inquiry, web development support, business growth consultation, React web agency contact",
    image: "/images/beingxbot-contact.jpg",
    url: "https://beingxbot.tech/contact",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact BeingxBot",
    description: seoData.description,
    url: seoData.url,
    mainEntity: {
      "@type": "Organization",
      name: "BeingxBot",
      url: "https://beingxbot.tech",
      logo: "/images/beingxbot-logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7079490430",
        contactType: "Customer Support",
        email: "beingxbot@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.instagram.com/beingxbot",
        "https://www.linkedin.com/company/beingxbot",
      ],
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

      <div className="bg-black min-h-screen section-transition">
        <Navbar />
        <SecureContactForm />
      </div>

      <div className="bg-white section-transition">
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
