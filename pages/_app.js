import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import FloatingBackToTop from "@/components/FloatingBackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react"; // ✅ Import Vercel Analytics

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <>
        <Component {...pageProps} />
        <FloatingBackToTop />
        <FloatingWhatsApp />
        <Analytics /> {/* ✅ Add this at the bottom inside return */}
      </>
    </SessionProvider>
  );
}
