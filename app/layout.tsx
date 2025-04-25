import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://meikopoulos.com"),
  // alternates: {
  //   canonical: "https://meikopoulos.com",
  // },
  title: "Muzzamil Hussain - Senior Software Engineer",
  description:
    "Muzzamil Hussain is a Senior Software Engineer.",
  keywords:
    "Muzzamil Hussain, Software Engineer, AI, Web3, User Experience, UI/UX Design, Front-end Development, Back-end Development, Full Stack, Nayatel, Technology, Innovation, Human-Centered Design, Javascript, React, Node, Next",
  openGraph: {
    locale: "en_US",
    siteName: "Muzzamil Hussain",
    type: "website",
    title: "Muzzamil Hussain",
    description:
      "Muzzamil Hussain is a Engineer.",
    // url: "https://meikopoulos.com",
    // images: [
    //   {
    //     url: "./og-large-meik-2.jpg",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Muzzamil Hussain",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
