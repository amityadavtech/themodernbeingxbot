import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import FloatingBackToTop from "@/components/FloatingBackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // ✅ make sure the path is correct

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <>
        <Component {...pageProps} />
        <FloatingBackToTop />
        <FloatingWhatsApp />
      </>
    </SessionProvider>
  );
}
