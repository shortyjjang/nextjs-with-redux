import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import React from "react";
import StoreProvider from "@/store/StoreProvider";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MBTI 테스트",
  description: "MBTI 테스트",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${notoSansKR.className} antialiased`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
