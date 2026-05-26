import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Avadhut Lele — Solutions Architect",
  description:
    "Solutions Architect with 14+ years building resilient middleware integration systems and cloud-native architectures. Apache Camel, Kafka, Kubernetes expert based in Pune, India.",
  keywords: [
    "Avadhut Lele",
    "Solutions Architect",
    "Apache Camel",
    "Middleware Integration",
    "Kubernetes",
    "Kafka",
    "Red Hat Fuse",
    "Pune",
    "India",
  ],
  authors: [{ name: "Avadhut Lele", url: "https://kodtodya.github.io" }],
  creator: "Avadhut Lele",
  openGraph: {
    type: "website",
    url: "https://kodtodya.github.io",
    title: "Avadhut Lele — Solutions Architect",
    description:
      "14+ years crafting resilient middleware integration systems and cloud-native architectures.",
    siteName: "Avadhut Lele Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avadhut Lele — Solutions Architect",
    description: "14+ years crafting resilient middleware integration systems and cloud-native architectures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
