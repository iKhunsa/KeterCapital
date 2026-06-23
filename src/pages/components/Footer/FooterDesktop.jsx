import React, { useState } from "react";
import Link from "next/link";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

const EMAIL = "business@assetrock.io";

export default function FooterDesktop() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-[374px] flex justify-between items-center">
      <div className="flex gap-x-16 lg:w-2/3">
        <div className="w-40 h-28 flex flex-col gap-y-9">
          <h1 className="text-lg text-[#242323]">Find us:</h1>
          <div className="flex flex-col">
            <Link href="https://www.linkedin.com/company/assetrock" target="_blank" rel="noopener noreferrer" className="text-sm">
              LinkedIn
            </Link>
            <Link href="https://t.me/iKhunsa" target="_blank" rel="noopener noreferrer" className="text-sm">
              Telegram
            </Link>
          </div>
        </div>
        <div className="w-48 h-28 flex flex-col gap-y-9">
          <h1 className="text-lg">Contacts:</h1>
          <div className="flex items-center gap-x-2">
            <Link href="mailto:business@assetrock.io" className="text-sm">
              {EMAIL}
            </Link>
            <button
              onClick={handleCopy}
              className="text-[#A7A4A4] hover:text-black transition-colors"
              aria-label="Copy email"
            >
              {copied ? <IoCheckmarkOutline size={14} /> : <IoCopyOutline size={14} />}
            </button>
          </div>
        </div>
        <div className="w-48 h-28 flex flex-col gap-y-9">
          <h1 className="text-lg">Insights:</h1>
          <div className="flex flex-col gap-y-1">
            <Link href="/blog/what-is-an-otc-crypto-desk" className="text-sm text-[#A7A4A4] hover:text-black transition-colors">
              What is an OTC Crypto Desk?
            </Link>
            <Link href="/blog/crypto-to-fiat-for-institutions" className="text-sm text-[#A7A4A4] hover:text-black transition-colors">
              Crypto-to-Fiat for Institutions
            </Link>
            <Link href="/blog/latam-crypto-liquidity" className="text-sm text-[#A7A4A4] hover:text-black transition-colors">
              Crypto Liquidity in LATAM
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-4 text-sm mt-3">
        <div className="flex gap-x-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
        <span className="text-[#A7A4A4]">© 2026 AssetRock</span>
      </div>
    </div>
  );
}
