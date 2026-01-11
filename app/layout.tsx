import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raghu Sai Kosana | ML Engineer & Full-Stack Developer",
  description: "Machine Learning Engineer with 3+ years of experience in NLP, predictive modeling, and full-stack development. Currently pursuing Master's in Computer Science at University of Cincinnati.",
  keywords: ["Machine Learning", "AI", "NLP", "Full-Stack Developer", "Python", "React", "TensorFlow", "Data Science"],
  authors: [{ name: "Raghu Sai Kosana" }],
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
  openGraph: {
    title: "Raghu Sai Kosana | ML Engineer & Full-Stack Developer",
    description: "ML Engineer with 3+ years experience building intelligent systems with 95% accuracy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
