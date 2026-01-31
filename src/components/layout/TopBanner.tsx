'use client';

import Link from 'next/link';

export default function TopBanner() {
  return (
    <div className="bg-black text-white w-full relative z-50">
      <div className="frame flex justify-between items-center py-2.25">
        {/* Boş div ile ortalamayı dengeliyoruz (Flex trick) */}
        <div className="hidden sm:block w-5"></div>

        {/* Ana Metin */}
        <p className="font-satoshi text-xs sm:text-sm font-normal text-white text-center flex-1">
          Sign up and get 20% off to your first order.{' '}
          <Link
            href="/sign-up"
            className="font-medium underline hover:text-gray-300 transition-colors ml-1"
          >
            Sign Up Now
          </Link>
        </p>

        {/* Tıklanabilir buton yerine statik ikon */}
        <span className="hidden sm:flex items-center justify-center text-white opacity-80 cursor-default">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white" /* Rengi white olarak zorladık */
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </div>
    </div>
  );
}
