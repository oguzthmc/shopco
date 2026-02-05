import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * İndirimli fiyatı hesaplar.
 * Eğer indirim oranı varsa, indirimli fiyatı döner, yoksa normal fiyatı.
 */
export const calculateItemPrice = (
  price: number,
  discountPercentage?: number,
): number => {
  if (discountPercentage && discountPercentage > 0) {
    return Math.round(price - (price * discountPercentage) / 100);
  }
  return price;
};

/**
 * İki string dizisinin (attributes) birebir aynı olup olmadığını kontrol eder.
 * Örn: ["Large", "Green"] === ["Large", "Green"] -> true
 */
export const compareAttributes = (attr1: string[], attr2: string[]) => {
  if (attr1.length !== attr2.length) return false;
  return attr1.every((value, index) => value === attr2[index]);
};
