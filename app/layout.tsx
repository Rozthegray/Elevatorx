// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Elevator X | Ohiagwu International Limited",
  description: "Innovative Elevator Solutions Tailored for Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-[#1E1E1E] antialiased`}>
        {children}
      </body>
    </html>
  );
}