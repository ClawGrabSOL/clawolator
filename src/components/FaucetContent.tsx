"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function FaucetContent() {
  const { connected, publicKey } = useWallet();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const requestAirdrop = async () => {
    if (!publicKey) return;
    
    setLoading(true);
    setStatus(null);
    
    try {
      const connection = new Connection("https://api.devnet.solana.com", "confirmed");
      const signature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
      await connection.confirmTransaction(signature);
      setStatus({ type: "success", message: "1 SOL airdropped successfully!" });
    } catch (error) {
      console.error(error);
      setStatus({ 
        type: "error", 
        message: "Airdrop failed. You may have hit the rate limit. Try again in a few minutes." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Devnet Faucet
          <span className="ml-3 inline-block rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--warning)]/80 border border-[var(--warning)]/15 bg-[var(--warning)]/[0.04]">
            devnet
          </span>
        </h1>
        <p className="text-[var(--text-muted)] text-sm">
          Get free devnet SOL for testing Clawolator.
        </p>
      </div>

      <div className="rounded-sm border border-[var(--border)] p-6">
        {!connected ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🔗</div>
            <h2 className="text-lg font-medium text-white mb-2">Connect Your Wallet</h2>
            <p className="text-[var(--text-muted)] text-sm">
              Connect your wallet to request devnet SOL.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <p className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider mb-2">Your Wallet</p>
              <p className="font-mono text-sm text-white bg-[var(--bg)] border border-[var(--border)] rounded-sm px-3 py-2 break-all">
                {publicKey?.toString()}
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={requestAirdrop}
                disabled={loading}
                className={`w-full rounded-sm py-4 text-sm font-semibold transition-all duration-200 ${
                  loading
                    ? "bg-[var(--border)] text-[var(--text-dim)] cursor-not-allowed"
                    : "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)]"
                }`}
              >
                {loading ? "Requesting..." : "🦞 Request 1 SOL"}
              </button>
            </div>

            {status && (
              <div className={`rounded-sm p-4 text-sm ${
                status.type === "success" 
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}>
                {status.message}
              </div>
            )}

            <div className="text-[11px] text-[var(--text-dim)] space-y-1">
              <p>• Devnet SOL has no real value</p>
              <p>• Rate limited to a few requests per hour</p>
              <p>• If rate limited, wait a few minutes and try again</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
