import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/molecules";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
