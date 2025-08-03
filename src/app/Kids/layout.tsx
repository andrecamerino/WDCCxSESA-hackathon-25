import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "../globals.css";

import KidsNavbar from "../Components/KidsNavbar";
import Header from "../Components/KidsHeader";
import { ChildProvider } from "@/context/ChildContext";
import { useParams } from "next/navigation";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "400",
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

// Because layout.tsx is a server component, we need to pass childID through a client boundary.
// So we’ll split the layout into a wrapper that grabs the childID using a client hook.

import React from "react";
import ClientWrapper from "./ClientWrapper"; // NEW helper client component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.className} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}