import Head from "next/head";
import Link from "next/link";
import Logo from "../components/Logo";

export default function WhatIsOTCCryptoDeskArticle() {
  return (
    <>
      <Head>
        <title>What is an OTC Crypto Desk? — AssetRock</title>
        <meta name="description" content="An OTC crypto desk allows institutional clients to execute large-volume crypto transactions privately, without impacting market prices. Learn how it works." />
        <meta property="og:title" content="What is an OTC Crypto Desk? — AssetRock" />
        <meta property="og:description" content="An OTC crypto desk allows institutional clients to execute large-volume crypto transactions privately, without impacting market prices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.assetrock.io/blog/what-is-an-otc-crypto-desk" />
        <link rel="canonical" href="https://www.assetrock.io/blog/what-is-an-otc-crypto-desk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#FAFAFA] min-h-screen font-[Inter]">
        <nav className="bg-[#FAFAFA] fixed h-24 w-full flex items-center px-6 sm:px-10 z-10 border-b border-[#EFEFEF]">
          <Link href="/"><Logo /></Link>
        </nav>

        <div className="max-w-2xl mx-auto px-6 pt-40 pb-24">
          <Link href="/" className="text-sm text-[#A7A4A4] hover:text-black transition-colors">← AssetRock</Link>

          <h1 className="text-4xl font-light uppercase mt-6 mb-2">What is an OTC Crypto Desk?</h1>
          <p className="text-sm text-[#A7A4A4] mb-12">AssetRock Insights · 2026</p>

          <section className="mb-10">
            <p className="text-base leading-7 text-[#242323]">
              An over-the-counter (OTC) crypto desk is a private trading service that facilitates
              large-volume cryptocurrency transactions directly between two parties, bypassing public
              exchanges. For institutional clients, this means executing significant trades discreetly,
              efficiently, and without triggering the price slippage that typically accompanies
              large orders on open markets.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">Why Institutions Use OTC Desks</h2>
            <p className="text-base leading-7 text-[#242323]">
              When a family office, corporate treasury, or investment fund needs to convert
              significant volumes of cryptocurrency into fiat currency — or vice versa — executing
              those trades on a public exchange exposes them to market impact, order book depth
              limitations, and public visibility of their position. An OTC desk eliminates these
              risks by matching buyers and sellers privately, with pre-agreed pricing and settlement terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">How It Works</h2>
            <p className="text-base leading-7 text-[#242323]">
              The process begins with a quote request. The client specifies the asset, volume, and
              preferred currency. The OTC desk provides a firm quote based on current market
              conditions and liquidity depth. Once accepted, both parties confirm settlement
              instructions and the transaction is executed — typically within hours, not days.
              No public order books. No partial fills. No market noise.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">What Sets a Quality OTC Desk Apart</h2>
            <p className="text-base leading-7 text-[#242323]">
              Not all OTC desks operate at the same standard. The differentiating factors are
              counterparty integrity, settlement speed, liquidity depth, and — critically —
              discretion. At the institutional level, the confidentiality of transaction details
              carries as much weight as the rate itself. A reliable OTC desk treats each
              transaction with the rigor of a private banking relationship.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-lg font-semibold uppercase mb-3">AssetRock's Approach</h2>
            <p className="text-base leading-7 text-[#242323]">
              AssetRock operates as an institutional OTC desk specializing in crypto-to-fiat
              conversions for family offices, investment funds, corporate treasuries, and
              high-net-worth individuals. We provide firm quotes, fast settlement, and full
              confidentiality from the first inquiry to final execution — across LATAM and globally.
            </p>
            <div className="mt-8">
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ05MjHvq6c23RtzuTd6o4yXWQ0aq-NKPuDuv8G4laZwByyW_sUw69vQkz73K2S9NbRk-ioT3hvR"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase underline text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                Schedule a Call
              </Link>
            </div>
          </section>

          <div className="border-t border-[#EFEFEF] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[#A7A4A4]">
            <span>© 2026 AssetRock</span>
            <div className="flex gap-x-6">
              <Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-black transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
