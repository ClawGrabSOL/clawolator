import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const FaucetContent = dynamic(() => import("@/components/FaucetContent"), { ssr: false });

export default function FaucetPage() {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="flex-1">
        <FaucetContent />
      </main>
      <Footer />
    </>
  );
}
