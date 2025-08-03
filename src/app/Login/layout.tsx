import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import '../globals.css'

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "400", // only weight available
});

export const metadata: Metadata = {
  title: "PiggyQuest",
  description: "Our hackathon website project for the WDCC x SESA Hackathon 2025!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sourGummy.className} antialiased`}>{children}</body>
    </html>
  )
}
