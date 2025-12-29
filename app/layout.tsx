import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Mirfallahi | Backend Developer - Laravel & Django Expert",
  description:
    "Backend-focused software developer specializing in Laravel, Django, REST APIs, and scalable system architecture. Building reliable backend systems for startups and international companies.",
  keywords: [
    "backend developer",
    "Laravel developer",
    "Django developer",
    "REST API",
    "software engineer",
    "remote developer",
    "full-stack developer",
  ],
  authors: [{ name: "Amir Mirfallahi" }],
  creator: "Amir Mirfallahi",
  publisher: "Amir Mirfallahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="og:title"
        content="Amir Mirfallahi | Backend Developer"
      />
      <meta
        property="og:description"
        content="Backend-focused developer building scalable systems with Laravel and Django."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://amirmirfallahi.ir" />

      <body className="antialiased">{children}</body>
    </html>
  );
}
