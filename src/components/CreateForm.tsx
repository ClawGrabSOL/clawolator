"use client";

import { useState } from "react";

interface CreateFormProps {
  wallet: string | null;
}

export function CreateForm({ wallet }: CreateFormProps) {
  const [tokenMint, setTokenMint] = useState("");
  const [maxLeverage, setMaxLeverage] = useState("20");
  const [fundingInterval, setFundingInterval] = useState("8h");
  const [insuranceFund, setInsuranceFund] = useState("1.0");
  const [oracleType, setOracleType] = useState("pyth");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }
    console.log("Creating market:", { tokenMint, maxLeverage, fundingInterval, insuranceFund, oracleType });
    alert(`Creating market for ${tokenMint.slice(0, 8)}...${tokenMint.slice(-4)}\n\nThis is a demo - actual deployment coming soon!`);
  };

  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-white mb-2">Create Market</h1>
        <p className="text-[var(--text-muted)] text-sm">
          Deploy a perpetual futures market for any SPL token. No permission required.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Token Mint */}
        <div className="space-y-2">
          <label className="block text-[13px] font-medium text-[var(--text-secondary)]">
            Token Mint Address
          </label>
          <input
            type="text"
            value={tokenMint}
            onChange={(e) => setTokenMint(e.target.value)}
            placeholder="Enter SPL token mint address"
            className="w-full rounded-sm border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            required
          />
          <p className="text-[11px] text-[var(--text-dim)]">
            The SPL token you want to create a perpetual market for
          </p>
        </div>

        {/* Oracle Type */}
        <div className="space-y-2">
          <label className="block text-[13px] font-medium text-[var(--text-secondary)]">
            Oracle Type
          </label>
          <select
            value={oracleType}
            onChange={(e) => setOracleType(e.target.value)}
            className="w-full rounded-sm border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors"
          >
            <option value="pyth">Pyth Network</option>
            <option value="switchboard">Switchboard</option>
            <option value="custom">Custom Oracle</option>
          </select>
          <p className="text-[11px] text-[var(--text-dim)]">
            Price feed source for the market
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-4">
          {/* Max Leverage */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-[var(--text-secondary)]">
              Max Leverage
            </label>
            <input
              type="number"
              value={maxLeverage}
              onChange={(e) => setMaxLeverage(e.target.value)}
              min="1"
              max="100"
              className="w-full rounded-sm border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
            <p className="text-[11px] text-[var(--text-dim)]">1-100x</p>
          </div>

          {/* Funding Interval */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-[var(--text-secondary)]">
              Funding Interval
            </label>
            <select
              value={fundingInterval}
              onChange={(e) => setFundingInterval(e.target.value)}
              className="w-full rounded-sm border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors"
            >
              <option value="1h">1 Hour</option>
              <option value="8h">8 Hours</option>
              <option value="24h">24 Hours</option>
            </select>
            <p className="text-[11px] text-[var(--text-dim)]">Settlement frequency</p>
          </div>
        </div>

        {/* Insurance Fund */}
        <div className="space-y-2">
          <label className="block text-[13px] font-medium text-[var(--text-secondary)]">
            Initial Insurance Fund (SOL)
          </label>
          <input
            type="number"
            value={insuranceFund}
            onChange={(e) => setInsuranceFund(e.target.value)}
            min="0.1"
            step="0.1"
            className="w-full rounded-sm border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
          <p className="text-[11px] text-[var(--text-dim)]">
            Seed capital for the market&apos;s insurance fund
          </p>
        </div>

        {/* Summary */}
        <div className="rounded-sm border border-[var(--border)] bg-[var(--accent)]/[0.02] p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-muted)]">Deployment Cost</span>
            <span className="text-white font-medium">{insuranceFund} SOL + fees</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-muted)]">Network</span>
            <span className="text-[var(--warning)]">Devnet</span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!wallet}
          className={`w-full rounded-sm py-4 text-sm font-semibold transition-all duration-200 ${
            wallet
              ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)]"
              : "bg-[var(--border)] text-[var(--text-dim)] cursor-not-allowed"
          }`}
        >
          {wallet ? "🦞 Deploy Market" : "Connect Wallet to Deploy"}
        </button>

        {wallet && (
          <p className="text-center text-[11px] text-[var(--text-dim)]">
            Connected: {wallet.slice(0, 4)}...{wallet.slice(-4)}
          </p>
        )}
      </form>
    </div>
  );
}
