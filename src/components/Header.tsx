"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/markets", label: "Markets" },
    { href: "/", label: "Create" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/guide", label: "Guide" },
    { href: "/faucet", label: "Faucet", isWarning: true },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 border-b border-transparent bg-[#050508]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2">
            <Image src="/logo.png" alt="Clawolator" width={28} height={28} className="rounded-sm" />
            <span className="text-lg font-semibold text-white">Clawolator</span>
          </Link>
          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.isWarning) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive 
                        ? "text-[var(--warning)]" 
                        : "text-[var(--warning)]/60 hover:text-[var(--warning)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-sm transition-all duration-200 ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--accent)]/[0.04]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2.5">
          <button 
            disabled
            className="rounded-sm px-2 py-1 text-[11px] font-semibold uppercase tracking-wider border transition-all duration-200 cursor-not-allowed opacity-60 text-[var(--warning)]/80 border-[var(--warning)]/15 bg-[var(--warning)]/[0.04]"
          >
            devnet
          </button>
          <div className="h-4 w-px bg-[var(--border)]"></div>
          <WalletMultiButton />
        </div>
      </div>
    </header>
  );
}
