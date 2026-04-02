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
    default: "Raghu Sai Kosana — ML Engineer & Full-Stack Developer",
    template: "%s | Raghu Sai Kosana",
  },
  description:
    "Machine Learning Engineer and Full-Stack Developer building NLP systems, production chatbots, and end-to-end web applications. Master's student at University of Cincinnati. Previously at Phamax.ch (medical chatbot, 5,000+ users) and VOIS (spam detection, 50k emails/day). Python, React, FastAPI, PyTorch.",
  keywords: [
    "Raghu Sai Kosana",
    "Machine Learning Engineer",
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
    title: "Raghu Sai Kosana — ML Engineer & Full-Stack Developer",
    description:
      "Building NLP systems and full-stack applications. Medical chatbot for 5,000+ users. Spam detection processing 50k emails/day. Master's at UC.",
    url: siteUrl,
    siteName: "Raghu Sai Kosana",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Sai Kosana — ML Engineer & Full-Stack Developer",
    description:
      "Building NLP systems and full-stack applications. Medical chatbot for 5,000+ users. Master's at UC.",
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
  jobTitle: "Machine Learning Engineer & Full-Stack Developer",
  description:
    "ML Engineer building NLP systems and full-stack applications. Master's student at University of Cincinnati.",
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
    "@type": "CollegeOrUniversity",
    name: "University of Cincinnati",
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
