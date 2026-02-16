import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const PortfolioContent = dynamic(() => import("@/components/PortfolioContent"), { ssr: false });

export default function PortfolioPage() {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="flex-1">
        <PortfolioContent />
      </main>
      <Footer />
    </>
  );
}
