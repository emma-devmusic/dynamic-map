import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrelineScript } from "@/lib";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapa Dinámico",
  description: "Encuantra un país y aprende sobre él.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
      <PrelineScript />
    </html>
  );
}
