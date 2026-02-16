import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MarketsPage() {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold text-white mb-2">Markets</h1>
            <p className="text-[var(--text-muted)] text-sm">
              Browse and trade perpetual futures markets.
            </p>
          </div>

          {/* Empty State */}
          <div className="rounded-sm border border-[var(--border)] bg-[var(--accent)]/[0.02] p-16 text-center">
            <div className="text-4xl mb-4">🦞</div>
            <h2 className="text-lg font-medium text-white mb-2">No Markets Yet</h2>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Be the first to deploy a perpetual futures market on Clawolator.
            </p>
            <a 
              href="/"
              className="inline-block rounded-sm bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black hover:bg-[var(--accent-hover)] transition-colors"
            >
              Create Market
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
