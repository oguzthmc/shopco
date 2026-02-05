export interface Product {
  id: number;
  title: string;
  image: string; // URL veya Path
  rating: number;
  price: number;
  originalPrice?: number; // İndirimsiz fiyat (Opsiyonel)
  discountPercentage?: number; // İndirim oranı (Opsiyonel)
  gallery?: string[];
}
