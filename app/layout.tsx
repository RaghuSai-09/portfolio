import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://raghusai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raghu Sai Kosana — Full-Stack Developer & GenAI Engineer",
    template: "%s | Raghu Sai Kosana",
  },
  description:
    "Full-stack developer and GenAI engineer building production LLM systems and end-to-end web applications. MEng in Computer Science, University of Cincinnati (May 2026). Software Engineer, AI Agents at Intellilake. Previously at Strategibuilder, Phamax (medical chatbot, 5,000+ users) and VOIS (spam detection, 50k emails/day). Python, React, FastAPI, PyTorch.",
  keywords: [
    "Raghu Sai Kosana",
    "GenAI Engineer",
    "Full-Stack Developer",
    "NLP Engineer",
    "Python Developer",
    "React Developer",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "University of Cincinnati",
    "ML portfolio",
    "AI Engineer",
    "medical chatbot",
    "spam detection",
    "BERT",
    "Next.js",
  ],
  authors: [{ name: "Raghu Sai Kosana", url: siteUrl }],
  creator: "Raghu Sai Kosana",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Raghu Sai Kosana — Full-Stack Developer & GenAI Engineer",
    description:
      "Building production LLM systems and full-stack applications. AI agents driving a financial UI at Intellilake. Medical chatbot for 5,000+ users. MEng, UC (May 2026).",
    url: siteUrl,
    siteName: "Raghu Sai Kosana",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Sai Kosana — Full-Stack Developer & GenAI Engineer",
    description:
      "Building production LLM systems and full-stack applications. Medical chatbot for 5,000+ users. MEng, UC (May 2026).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raghu Sai Kosana",
  url: siteUrl,
  jobTitle: "Software Engineer, AI Agents",
  description:
    "Full-stack developer and GenAI engineer building production LLM systems. MEng in Computer Science, University of Cincinnati (May 2026).",
  email: "kosanaraghusai@gmail.com",
  sameAs: [
    "https://github.com/raghusai-09",
    "https://www.linkedin.com/in/raghusai09/",
    "https://leetcode.com/u/raghusai_kosana/",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Cincinnati",
      department: "Computer Science",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "SRM University - AP",
      department: "Computer Science",
    },
  ],
  knowsAbout: [
    "Machine Learning",
    "Natural Language Processing",
    "RAG",
    "LangChain",
    "AWS",
    "Full-Stack Development",
    "Python",
    "React",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "Docker",
    "Azure",
    "Next.js",
    "Node.js",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Intellilake",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
