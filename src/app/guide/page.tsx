import { TickerBanner } from "@/components/TickerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function GuidePage() {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold text-white mb-2">Guide</h1>
            <p className="text-[var(--text-muted)] text-sm">
              Learn how to create and trade perpetual futures on Clawolator.
            </p>
          </div>

          <div className="space-y-8">
            {/* What is Clawolator */}
            <section className="rounded-sm border border-[var(--border)] p-6">
              <h2 className="text-lg font-medium text-white mb-3">🦞 What is Clawolator?</h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Clawolator is a permissionless perpetual futures protocol on Solana. Anyone can create a 
                leveraged trading market for any SPL token in under 60 seconds — no governance, no gatekeepers, 
                no permission required.
              </p>
            </section>

            {/* How to Create a Market */}
            <section className="rounded-sm border border-[var(--border)] p-6">
              <h2 className="text-lg font-medium text-white mb-3">📝 Creating a Market</h2>
              <ol className="text-[var(--text-muted)] text-sm leading-relaxed space-y-3 list-decimal list-inside">
                <li>Connect your Solana wallet (Phantom, Solflare, etc.)</li>
                <li>Enter the SPL token mint address you want to create a market for</li>
                <li>Select an oracle type (Pyth or Switchboard recommended)</li>
                <li>Set your max leverage (1-100x)</li>
                <li>Choose a funding rate interval (1h, 8h, or 24h)</li>
                <li>Deposit initial insurance fund (minimum 0.1 SOL)</li>
                <li>Click &quot;Deploy Market&quot; and approve the transaction</li>
              </ol>
            </section>

            {/* Trading */}
            <section className="rounded-sm border border-[var(--border)] p-6">
              <h2 className="text-lg font-medium text-white mb-3">📈 Trading</h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">
                Once markets exist, you can open long or short positions with leverage:
              </p>
              <ul className="text-[var(--text-muted)] text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li><strong className="text-white">Long:</strong> Profit when the price goes up</li>
                <li><strong className="text-white">Short:</strong> Profit when the price goes down</li>
                <li><strong className="text-white">Leverage:</strong> Multiply your exposure (and risk)</li>
                <li><strong className="text-white">Funding Rate:</strong> Periodic payments between longs and shorts</li>
              </ul>
            </section>

            {/* Insurance Fund */}
            <section className="rounded-sm border border-[var(--border)] p-6">
              <h2 className="text-lg font-medium text-white mb-3">🛡️ Insurance Fund</h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Every market has its own insurance fund to cover liquidation shortfalls. When a position 
                is liquidated and the remaining collateral can&apos;t cover the loss, the insurance fund steps in. 
                If the insurance fund is depleted, losses are socialized across profitable positions.
              </p>
            </section>

            {/* Devnet Notice */}
            <section className="rounded-sm border border-[var(--warning)]/20 bg-[var(--warning)]/[0.03] p-6">
              <h2 className="text-lg font-medium text-[var(--warning)] mb-3">⚠️ Devnet Only</h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Clawolator is currently live on Solana Devnet only. All tokens are test tokens with no real value. 
                Use the <a href="/faucet" className="text-[var(--accent)] hover:underline">Faucet</a> to get free devnet SOL for testing.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
