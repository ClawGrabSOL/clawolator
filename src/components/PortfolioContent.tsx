"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export default function PortfolioContent() {
  const { connected, publicKey } = useWallet();

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-white mb-2">Portfolio</h1>
        <p className="text-[var(--text-muted)] text-sm">
          View your positions, orders, and trading history.
        </p>
      </div>

      {!connected ? (
        <div className="rounded-sm border border-[var(--border)] bg-[var(--accent)]/[0.02] p-16 text-center">
          <div className="text-4xl mb-4">🔗</div>
          <h2 className="text-lg font-medium text-white mb-2">Connect Your Wallet</h2>
          <p className="text-[var(--text-muted)] text-sm mb-6">
            Connect your wallet to view your portfolio and positions.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-sm border border-[var(--border)] p-6">
            <h2 className="text-sm font-medium text-[var(--text-muted)] mb-4">Account Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider mb-1">Wallet</p>
                <p className="text-sm text-white font-mono">
                  {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider mb-1">Balance</p>
                <p className="text-sm text-white">0.00 SOL</p>
              </div>
              <div>
                <p className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider mb-1">Open Positions</p>
                <p className="text-sm text-white">0</p>
              </div>
              <div>
                <p className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider mb-1">Total PnL</p>
                <p className="text-sm text-white">$0.00</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[var(--border)] p-6">
            <h2 className="text-sm font-medium text-[var(--text-muted)] mb-4">Open Positions</h2>
            <div className="text-center py-8">
              <p className="text-[var(--text-dim)] text-sm">No open positions</p>
            </div>
          </div>

          <div className="rounded-sm border border-[var(--border)] p-6">
            <h2 className="text-sm font-medium text-[var(--text-muted)] mb-4">Order History</h2>
            <div className="text-center py-8">
              <p className="text-[var(--text-dim)] text-sm">No orders yet</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
