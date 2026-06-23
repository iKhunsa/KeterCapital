import Head from "next/head";
import Link from "next/link";
import Logo from "./components/Logo";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — AssetRock</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#FAFAFA] min-h-screen font-[Inter]">
        <nav className="sm:bg-[#FAFAFA] fixed h-24 w-full flex items-center px-6 sm:px-10 z-10 border-b border-[#EFEFEF]">
          <Link href="/">
            <Logo />
          </Link>
        </nav>

        <div className="max-w-2xl mx-auto px-6 pt-40 pb-24">
          <h1 className="text-4xl font-light uppercase mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#A7A4A4] mb-12">Last updated: January 1, 2026</p>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">1. Introduction</h2>
            <p className="text-base leading-7 text-[#242323]">
              AssetRock ("we", "our", "us") is committed to protecting your personal information.
              This Privacy Policy describes how we collect, use, and safeguard the data you provide
              when engaging with our services or contacting us through any channel.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">2. Information We Collect</h2>
            <p className="text-base leading-7 text-[#242323]">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc list-inside mt-3 text-base leading-8 text-[#242323]">
              <li>Identity data: full name, company name, and role.</li>
              <li>Contact data: email address and phone number.</li>
              <li>Transaction data: volume, currency pairs, settlement instructions, and related documentation required for KYC/AML compliance.</li>
              <li>Usage data: IP address, browser type, and pages visited on our website.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">3. How We Use Your Information</h2>
            <p className="text-base leading-7 text-[#242323]">
              Your information is used exclusively to:
            </p>
            <ul className="list-disc list-inside mt-3 text-base leading-8 text-[#242323]">
              <li>Process and settle transactions on your behalf.</li>
              <li>Comply with applicable AML, KYC, and regulatory obligations.</li>
              <li>Communicate about quotes, settlements, and service updates.</li>
              <li>Improve our website and operational processes.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">4. Data Sharing</h2>
            <p className="text-base leading-7 text-[#242323]">
              We do not sell or rent your personal data. We may share information with regulated
              third-party partners solely when required for transaction settlement, legal compliance,
              or fraud prevention. All third parties are bound by strict confidentiality obligations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">5. Data Retention</h2>
            <p className="text-base leading-7 text-[#242323]">
              We retain your data for as long as necessary to fulfill the purposes described in this
              policy and to comply with our legal obligations, typically a minimum of five (5) years
              for transaction records.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">6. Security</h2>
            <p className="text-base leading-7 text-[#242323]">
              We apply institutional-grade security measures to protect your information, including
              encrypted communications, access controls, and confidential handling by our team.
              No method of transmission over the internet is 100% secure; however, we maintain
              appropriate safeguards to mitigate risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">7. Your Rights</h2>
            <p className="text-base leading-7 text-[#242323]">
              Depending on your jurisdiction, you may have the right to access, correct, or request
              deletion of your personal data. To exercise any of these rights, contact us at{" "}
              <a href="mailto:business@assetrock.io" className="underline">business@assetrock.io</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold uppercase mb-3">8. Changes to This Policy</h2>
            <p className="text-base leading-7 text-[#242323]">
              We may update this Privacy Policy periodically. Material changes will be communicated
              through our website or directly to clients with whom we have an active relationship.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-lg font-semibold uppercase mb-3">9. Contact</h2>
            <p className="text-base leading-7 text-[#242323]">
              For any privacy-related inquiries, please reach us at{" "}
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
