import Head from "next/head";
import Link from "next/link";
import Logo from "./components/Logo";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — AssetRock</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#FAFAFA] min-h-screen font-[Inter]">
        <nav className="sm:bg-[#FAFAFA] fixed h-24 w-full flex items-center px-6 sm:px-10 z-10 border-b border-[#EFEFEF]">
          <Link href="/">
            <Logo />
          </Link>
        </nav>

        <div className="max-w-2xl mx-auto px-6 pt-40 pb-24">
          <h1 className="text-4xl font-light uppercase mb-2">Terms of Service</h1>
          <p className="text-sm text-[#A7A4A4] mb-12">Last updated: January 1, 2026</p>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">1. Acceptance</h2>
            <p className="text-base leading-7 text-[#242323]">
              By engaging with AssetRock's services, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, you must not use our services.
              These terms constitute a legally binding agreement between you and AssetRock.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">2. Services</h2>
            <p className="text-base leading-7 text-[#242323]">
              AssetRock provides over-the-counter (OTC) crypto-to-fiat and fiat-to-crypto
              conversion services for institutional clients, including family offices, investment
              funds, corporate treasuries, and high-net-worth individuals. We operate across LATAM
              with a global reach. Services are provided on a quote basis, and execution is subject
              to confirmation by both parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">3. Eligibility</h2>
            <p className="text-base leading-7 text-[#242323]">
              Our services are available exclusively to legal entities and individuals who:
            </p>
            <ul className="list-disc list-inside mt-3 text-base leading-8 text-[#242323]">
              <li>Are of legal age in their jurisdiction.</li>
              <li>Have successfully completed our KYC/AML onboarding process.</li>
              <li>Are not located in a sanctioned or restricted territory.</li>
              <li>Operate in compliance with applicable laws and regulations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">4. Quotes and Settlement</h2>
            <p className="text-base leading-7 text-[#242323]">
              All quotes provided by AssetRock are indicative and subject to market conditions at
              the time of execution. A transaction is binding only upon written confirmation from
              both parties. Settlement terms, timelines, and banking instructions will be agreed
              upon per transaction. AssetRock reserves the right to decline any transaction at
              its sole discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">5. Prohibited Use</h2>
            <p className="text-base leading-7 text-[#242323]">
              You agree not to use AssetRock's services for:
            </p>
            <ul className="list-disc list-inside mt-3 text-base leading-8 text-[#242323]">
              <li>Money laundering, terrorist financing, or any illegal activity.</li>
              <li>Circumventing financial sanctions or regulatory restrictions.</li>
              <li>Any activity that violates applicable local or international law.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">6. Confidentiality</h2>
            <p className="text-base leading-7 text-[#242323]">
              All transaction details, pricing, and commercial terms are strictly confidential.
              Neither party shall disclose the terms of any transaction to third parties without
              prior written consent, except as required by law or regulatory authority.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">7. Limitation of Liability</h2>
            <p className="text-base leading-7 text-[#242323]">
              AssetRock shall not be liable for any indirect, incidental, or consequential damages
              arising from market movements, settlement delays caused by third-party banking
              intermediaries, or force majeure events. Our total liability in any circumstance
              shall not exceed the fees collected for the specific transaction in question.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">8. Governing Law</h2>
            <p className="text-base leading-7 text-[#242323]">
              These Terms of Service shall be governed by and construed in accordance with
              applicable law. Any disputes arising from or related to these terms or our services
              shall be subject to the exclusive jurisdiction of competent courts, as mutually
              agreed upon during onboarding.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-lg font-semibold uppercase mb-3">9. Contact</h2>
            <p className="text-base leading-7 text-[#242323]">
              For questions regarding these Terms of Service, contact us at{" "}
              <a href="mailto:business@assetrock.io" className="underline">business@assetrock.io</a>.
            </p>
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
