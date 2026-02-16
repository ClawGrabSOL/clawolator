"use client";

import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { CreateForm } from "@/components/CreateForm";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const { solana } = window as any;
      if (solana?.isPhantom) {
        const response = await solana.connect();
        setWallet(response.publicKey.toString());
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectWallet = () => {
    const { solana } = window as any;
    if (solana) {
      solana.disconnect();
      setWallet(null);
    }
  };

  useEffect(() => {
    const { solana } = window as any;
    if (solana?.isPhantom) {
      solana.connect({ onlyIfTrusted: true }).then((response: any) => {
        setWallet(response.publicKey.toString());
      }).catch(() => {});
    }
  }, []);

  return (
    <>
      <TickerBanner />
      <Header 
        wallet={wallet} 
        onConnect={connectWallet} 
        onDisconnect={disconnectWallet} 
      />
      <main className="flex-1">
        <CreateForm wallet={wallet} />
      </main>
      <Footer />
    </>
  );
}
