import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import RequestQuoteForm from "@/components/RequestQuote/RequestQuote";

export default function RequestQuotePage() {
  const seoData = {
    title: "Request a Quote | BeingxBot - Custom Web Development & SEO Solutions",
    description:
      "Request a free quote from BeingxBot for website development, SEO optimization, or digital marketing. Get expert solutions tailored to your business needs.",
    keywords:
      "Request quote web development, BeingxBot quote form, SEO services estimate, digital marketing pricing, custom website quote, web design cost, hire developer quote",
    image: "/images/beingxbot-request-quote.jpg",
    url: "https://beingxbot.tech/request-quote",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BeingxBot Web Services",
    serviceType: "Web Development, SEO, Digital Marketing",
    provider: {
      "@type": "Organization",
      name: "BeingxBot",
      url: "https://beingxbot.tech",
      logo: "https://beingxbot.tech/images/beingxbot-logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7079490430",
        contactType: "Customer Support",
        email: "beingxbot@gmail.com",
      }
    },
    areaServed: "IN",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: seoData.url,
      availableLanguage: ["English", "Hindi"]
    }
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
        <RequestQuoteForm />
      </div>

      <div className="bg-white section-transition">
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
