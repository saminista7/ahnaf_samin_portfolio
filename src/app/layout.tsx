import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahnaf Samin | AI/ML Engineer Portfolio",
  description:
    "AI/ML Engineer and Data Analyst portfolio - machine learning, NLP, analytics engineering, and applied GenAI systems.",
  metadataBase: new URL("https://ahnaf-samin-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
