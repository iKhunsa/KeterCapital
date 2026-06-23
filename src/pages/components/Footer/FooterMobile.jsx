import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

const EMAIL = "business@assetrock.io";

export default function FooterMobile() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-full p-8 gap-y-3">
      <div className="flex items-center gap-x-2">
        <span className="text-sm text-[#242323]">{EMAIL}</span>
        <button
          onClick={handleCopy}
          className="text-[#A7A4A4] hover:text-black transition-colors"
          aria-label="Copy email"
        >
          {copied ? <IoCheckmarkOutline size={16} /> : <IoCopyOutline size={16} />}
        </button>
      </div>
      <div className="flex gap-x-4 px-2 py-2">
        <Link href="https://www.linkedin.com/company/assetrock" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn color="#A7A4A4" size={18} />
        </Link>
        <Link href="https://t.me/iKhunsa" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane color="#A7A4A4" size={18} />
        </Link>
      </div>
      <h6 className="text-[#A7A4A4] text-xs">© 2026 AssetRock</h6>
    </div>
  );
}
