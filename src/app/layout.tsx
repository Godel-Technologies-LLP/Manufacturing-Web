import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnerModal from "@/components/PartnerModal";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Godel Technologies — AI-Driven Manufacturing Intelligence",
  description: "Transform legacy shop-floor operations with next-generation edge intelligence and generative AI orchestrations. Your strategic partner for autonomous manufacturing solutions.",
  metadataBase: new URL("https://godeltech.in"),
  openGraph: {
    title: "Godel Technologies — AI-Driven Manufacturing Intelligence",
    description: "Transform legacy shop-floor operations with next-generation edge intelligence and generative AI orchestrations.",
    type: "website",
    locale: "en_US",
    siteName: "Godel Technologies Manufacturing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godel Technologies — AI-Driven Manufacturing Intelligence",
    description: "Transform legacy shop-floor operations with next-generation edge intelligence and generative AI orchestrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white font-satoshi antialiased text-bodytext">
        <ModalProvider>
          <div className="flex flex-col min-h-screen relative">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
            <PartnerModal />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
