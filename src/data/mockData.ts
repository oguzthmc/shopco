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

export const topSellingData: Product[] = [
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    image: '/assets/images/top-selling-img-1.svg',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discountPercentage: 20,
  },
  {
    id: 6,
    title: 'Courage Graphic T-shirt',
    image: '/assets/images/top-selling-img-2.svg',
    rating: 4.0,
    price: 145,
  },
  {
    id: 7,
    title: 'Loose Fit Bermuda Shorts',
    image: '/assets/images/top-selling-img-3.svg',
    rating: 3.0,
    price: 80,
  },
  {
    id: 8,
    title: 'Faded Skinny Jeans',
    image: '/assets/images/top-selling-img-4.svg',
    rating: 4.5,
    price: 210,
  },
];
