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

export const dressStyleData = [
  {
    id: 1,
    title: 'Casual',
    image: '/assets/images/dress-style-img-1.svg',
    // Sol Küçük (Web: 2 birim, Mobil: 1 birim)
    className: 'col-span-1 md:col-span-2',
  },
  {
    id: 2,
    title: 'Formal',
    image: '/assets/images/dress-style-img-2.svg',
    // Sağ Büyük (Web: 3 birim, Mobil: 1 birim)
    className: 'col-span-1 md:col-span-3',
  },
  {
    id: 3,
    title: 'Party',
    image: '/assets/images/dress-style-img-3.svg',
    // Sol Küçük (DÜZELTİLDİ: 3 yerine 2 yapıldı, Casual ile hizalandı)
    className: 'col-span-1 md:col-span-3',
  },
  {
    id: 4,
    title: 'Gym',
    image: '/assets/images/dress-style-img-4.svg',
    // Sağ Büyük (DÜZELTİLDİ: 2 yerine 3 yapıldı, Formal ile hizalandı)
    className: 'col-span-1 md:col-span-2',
  },
];

export const reviewsData = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: 'Mooen',
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 5,
    name: 'Emily R.',
    rating: 5,
    comment:
      'Shopping at Shop.co has been an amazing experience from start to finish. The website is easy to use, product photos are accurate, and the quality of the clothes exceeded what I expected for the price.',
  },
  {
    id: 6,
    name: 'Daniel T.',
    rating: 4,
    comment:
      'I’ve ordered from Shop.co multiple times and have always been satisfied. The fabrics feel premium, sizing is consistent, and delivery is fast. Definitely a reliable online clothing store.',
  },
  {
    id: 7,
    name: 'Olivia P.',
    rating: 5,
    comment:
      'What I love most about Shop.co is the balance between trendy designs and everyday wear. Everything I’ve purchased fits perfectly and feels comfortable even after several washes.',
  },
  {
    id: 8,
    name: 'Michael B.',
    rating: 4,
    comment:
      'Shop.co offers a wide variety of styles that make online shopping enjoyable. The checkout process is smooth, prices are fair, and customer support responds quickly when needed.',
  },
  {
    id: 9,
    name: 'Sophia W.',
    rating: 5,
    comment:
      'From browsing to delivery, Shop.co makes online shopping effortless. The clothing quality, modern designs, and attention to detail make it one of my favorite fashion e-commerce sites.',
  },
  {
    id: 10,
    name: 'Liam H.',
    rating: 5,
    comment:
      'I was impressed by how professional and seamless the entire Shop.co experience was. Great selection, accurate sizing guides, and high-quality materials keep me coming back.',
  },
];

export const footerLinks = [
  {
    title: 'COMPANY',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Works', href: '/works' },
      { name: 'Career', href: '/career' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { name: 'Customer Support', href: '/support' },
      { name: 'Delivery Details', href: '/delivery' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { name: 'Account', href: '/account' },
      { name: 'Manage Deliveries', href: '/manage-deliveries' },
      { name: 'Orders', href: '/orders' },
      { name: 'Payments', href: '/payments' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Free eBooks', href: '/ebooks' },
      { name: 'Development Tutorial', href: '/tutorials' },
      { name: 'How to - Blog', href: '/blog' },
      { name: 'Youtube Playlist', href: '/youtube' },
    ],
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: '/assets/logos/twitter.svg',
    link: 'https://twitter.com',
    bg: 'bg-white',
    border: 'border-black/20',
  },
  {
    id: 2,
    icon: '/assets/logos/facebook.svg',
    link: 'https://facebook.com',
    bg: 'bg-black',
    border: 'border-transparent',
    iconColor: 'brightness-0 invert', // Siyah zemin üstüne beyaz ikon için
  },
  {
    id: 3,
    icon: '/assets/logos/instagram.svg',
    link: 'https://instagram.com',
    bg: 'bg-white',
    border: 'border-black/20',
  },
  {
    id: 4,
    icon: '/assets/logos/github.svg',
    link: 'https://github.com',
    bg: 'bg-white',
    border: 'border-black/20',
  },
];

export const paymentIcons = [
  { id: 1, icon: '/assets/logos/visa.svg', alt: 'Visa' },
  { id: 2, icon: '/assets/logos/mastercard.svg', alt: 'Mastercard' },
  { id: 3, icon: '/assets/logos/paypal.svg', alt: 'Paypal' },
  { id: 4, icon: '/assets/logos/apple-pay.svg', alt: 'Apple Pay' },
  { id: 5, icon: '/assets/logos/google-pay.svg', alt: 'Google Pay' },
];
