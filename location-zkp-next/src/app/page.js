'use client';

import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import '@aptos-labs/wallet-adapter-ant-design/dist/index.css';

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        
      </div>
    </main>
  );
}
