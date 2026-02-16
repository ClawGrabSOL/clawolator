import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const CreateForm = dynamic(() => import("@/components/CreateForm"), { ssr: false });

export default function Home() {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="flex-1">
        <CreateForm />
      </main>
      <Footer />
    </>
  );
}
