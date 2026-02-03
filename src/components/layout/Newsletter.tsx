'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  return (
    <div className="w-full max-w-310 mx-auto relative px-4 md:px-0">
      {/* Kutu Tasarımı: Siyah arka plan, 20px radius */}
      <div className="bg-brand-black rounded-[20px] px-6 py-8 md:px-16 md:py-9 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Sol Taraf: Başlık */}
        <h2 className="integral-text font-bold text-[32px] md:text-[40px] leading-8.75 md:leading-11.25 text-white max-w-137.75 text-left uppercase">
          stay upto date about our latest offers
        </h2>

        {/* Sağ Taraf: Input ve Buton */}
        <div className="flex flex-col gap-3.5 w-full md:w-auto">
          {/* Email Input Alanı */}
          <div className="w-full md:w-87.25 h-12 bg-white rounded-[62px] flex items-center px-4 gap-3">
            <Image
              src="/assets/icons/mail.svg"
              alt="mail icon"
              width={24}
              height={24}
              className="opacity-40" // İkon rengi için hafif opacity
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 font-satoshi font-normal text-sm md:text-base text-black outline-none placeholder:text-black/40"
            />
          </div>

          {/* Subscribe Butonu */}
          <Button
            variant="primary" // Buton componentindeki 'primary' aslında siyah bg, ama burada beyaz istiyoruz.
            // Bu yüzden 'secondary' veya custom class kullanabiliriz. Tasarımda "bg-white text-black" istenmiş.
            // Button componentindeki 'secondary' tam buna uyuyor mu? 'secondary': 'bg-white text-black border...'
            // Biz manuel class vererek ezebiliriz.
            className="w-full md:w-87.25 h-11.5 bg-white text-black! hover:bg-white/90 rounded-[62px] font-satoshi font-medium text-base border-none!"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}
