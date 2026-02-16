import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Clawolator — Perpetual Futures for Any Token",
  description: "Deploy a perpetual futures market on Solana in one click. No smart contract. No permission. Up to 20x leverage on any SPL token.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-[#050508] text-[#eeeef0] antialiased`}>
        <div className="cursor-glow" id="cursor-glow"></div>
        <div className="relative z-[1] flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
