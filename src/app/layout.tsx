import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "400", // only weight available
});

const iconRoute = "/assets/piggy-logo-icon.png";

export const metadata: Metadata = {
  title: "PiggyQuest",
  description: "Our hackathon website project for the WDCC x SESA Hackathon 2025!",
  icons: {
    icon: iconRoute,
    apple: iconRoute,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.className} antialiased`}>
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
