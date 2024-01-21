import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie 2024",
  description:
    "Movie app with Next JS, Typescript, and Tailwind CSS by Handri Hermawan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${roboto.className} bg-gradient-to-b from-gray-900 via-cyan-950 to-cyan-900`}
        >
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
