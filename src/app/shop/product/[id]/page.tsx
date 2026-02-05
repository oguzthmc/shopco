import { notFound } from 'next/navigation';

import BreadcrumbProduct from '@/components/shop/product-detail/BreadcrumbProduct';
import ProductMain from '@/components/shop/product-detail/Main';
import { newArrivalsData, topSellingData } from '@/data/mockData';
import ProductTabs from '@/components/shop/product-detail/Tabs';

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

      {/* Main Content Wrapper (Galeri ve Detay Alanı) */}
      <ProductMain data={productData} />

      <ProductTabs />
    </main>
  );
}
