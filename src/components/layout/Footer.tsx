import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, paymentIcons, socialMediaLinks } from '@/data/mockData';
import Newsletter from '@/components/layout/Newsletter';

export default function Footer() {
  return (
    // Footer Container
    // mt-[100px] -> Newsletter'ın yarısı kadar üstten boşluk bırakıyoruz ki sayfa içeriğiyle çakışmasın.
    // pt-[140px] -> Gri alanın içindeki üst boşluk (Newsletter'ın girdiği alan + ekstra boşluk).
    <footer className="relative bg-brand-gray mt-35 pt-40 md:pt-35 pb-10 md:pb-20">
      {/* --- NEWSLETTER ALANI (OVERLAP) --- */}
      {/* absolute ile footer'ın en tepesine, yarısı dışarı taşacak şekilde yerleştiriyoruz */}
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 z-20">
        <Newsletter />
      </div>

      <div className="frame">
        {/* --- ÜST KISIM (Linkler ve Logo) --- */}
        <div className="grid grid-cols-2 md:grid-cols-[248px_104px_136px_149px_149px] md:justify-between gap-y-6 gap-x-4 md:gap-x-0 mb-10 md:mb-16 mt-6 md:mt-0 pr-2 md:pr-0">
          {/* Sol Kolon: Logo, Açıklama, Sosyal Medya */}
          <div className="flex flex-col col-span-2 md:col-span-1 gap-3 md:gap-6 mb-4 md:mb-0">
            {/* Logo */}
            <Link
              href="/"
              className="integral-text font-bold text-[29px] md:text-[33.5px] leading-none text-brand-black"
            >
              SHOP.CO
            </Link>

            {/* Açıklama */}
            <p className="font-satoshi font-normal text-sm text-black/60 leading-5.5 pr-4">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-3">
              {socialMediaLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className={`w-7 h-7 flex items-center justify-center rounded-full border transition-transform hover:-translate-y-1 ${social.bg} ${social.border}`}
                >
                  <Image
                    src={social.icon}
                    alt="social icon"
                    // FACEBOOK İKONU DÜZELTMESİ:
                    // Eğer id'si 2 (Facebook) ise genişliğini biraz kısıyoruz, değilse normal bırakıyoruz.
                    width={social.id === 2 ? 8 : 14}
                    height={social.id === 2 ? 12 : 14}
                    className={`${social.iconColor || ''} object-contain`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Kolonları (Mapping) */}
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-6 col-span-1"
            >
              <h3 className="font-satoshi font-medium text-sm md:text-base tracking-[3px] text-brand-black uppercase">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="font-satoshi font-normal text-sm md:text-base text-black/60 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- AYIRICI ÇİZGİ --- */}
        <div className="w-full h-px bg-black/10 mb-6 md:mb-8"></div>

        {/* --- ALT KISIM (Copyright ve Ödeme) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pr-2 md:pr-0">
          {/* Copyright */}
          <p className="font-satoshi font-normal text-sm text-black/60 text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Ödeme Yöntemleri */}
          {/* SVG'lerin hepsi assets/icons/logos altında olmalı */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((payment) => (
              <div
                key={payment.id}
                className="bg-white w-10 h-6.5 md:w-11.5 md:h-7.5 flex items-center justify-center rounded-[5px] border border-[#D6DCE5] shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={payment.icon}
                  alt={payment.alt}
                  width={32}
                  height={20}
                  className="object-contain max-h-4.5 max-w-7"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
