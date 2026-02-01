import { Product } from '@/types/product';

// Figma'daki verilere uygun Mock Data
export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    image: '/assets/images/new-arrivals-img-1.svg',
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    image: '/assets/images/new-arrivals-img-2.svg',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
  },
  {
    id: 3,
    title: 'Checkered Shirt',
    image: '/assets/images/new-arrivals-img-3.svg',
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    image: '/assets/images/new-arrivals-img-4.svg',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discountPercentage: 30,
  },
];
