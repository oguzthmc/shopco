import { notFound } from 'next/navigation';
// İlgili mock dataları import ediyoruz
import { newArrivalsData, topSellingData } from '@/data/mockData';
import BreadcrumbProduct from '@/components/shop/product-detail/BreadcrumbProduct';

// Tüm ürünleri birleştirip arama yapacağız
const allProducts = [...newArrivalsData, ...topSellingData];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // 1. Parametreleri çözümle (await)
  const { id } = await params;

  // 2. Ürünü bul (ID string gelebilir, number'a çeviriyoruz)
  const productData = allProducts.find((product) => product.id === Number(id));

  // 3. Ürün bulunamazsa 404 sayfasına yönlendir
  if (!productData) {
    notFound();
  }

  return (
    <main className="frame px-4 md:px-0 pt-5 md:pt-6 pb-20">
      {/* Üst Ayırıcı Çizgi */}
      <hr className="h-px border-t-black/10 mb-5 sm:mb-6" />

      {/* Breadcrumb Bileşeni */}
      <BreadcrumbProduct title={productData.title} />

      {/* Product Detail Alanı (Header) - Şimdilik placeholder */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-11">
        {/* Sol Taraf: Galeri */}
        <div className="bg-[#F0EEED] rounded-[20px] h-75 md:h-132.5 flex items-center justify-center">
          <span className="text-black/50">
            Gallery Area (ID: {productData.id})
          </span>
        </div>

        {/* Sağ Taraf: Detaylar */}
        <div className="flex flex-col gap-6">
          <h1 className="integral-text font-bold text-[40px] leading-none uppercase">
            {productData.title}
          </h1>
          <p className="font-satoshi text-black/60">
            Product Details Placeholder
          </p>
        </div>
      </section>

      {/* Tabs Placeholder */}
      <div className="bg-gray-50 h-20 rounded mb-10 flex items-center justify-center">
        Tabs Component Placeholder
      </div>
    </main>
  );
}
