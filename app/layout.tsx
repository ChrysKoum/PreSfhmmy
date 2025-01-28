import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

import StairTransition from "@/components/ui/StairTransition";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PreΣΦΗΜΜΥ 9 | SocIIoTy",
  description: "Shaping the post-pandemic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s_logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StairTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
