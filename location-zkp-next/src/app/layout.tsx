"use client";

import { Inter, Fraunces, Caudex } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caudex = Caudex({
  subsets: ["latin"],
  variable: "--font-caudex",
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const wallets = [new PetraWallet()];

  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          fraunces.variable,
          caudex.variable,
          "font-inter bg-black text-white antialiased"
        )}
      >
        {/* Global Wallet Provider */}
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          {/* Wallet Selector at Top-Right */}
          <div className="fixed top-4 right-4 z-50">
            <WalletSelector />
          </div>

          {/* Page Content */}
          {children}
        </AptosWalletAdapterProvider>
      </body>
    </html>
  );
}
