import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
     { id: 5, name: 'fruits'}

  ];

  products: Product[] = [

    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple flagship smartphone with A17 chip.',
      price: 649000,
      rating: 4.8,
      image: 'https://e-katalog.kz/jpg_zoom1/2533891.jpg',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1510557880182-3f8a8d06c2be?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 5
    },  
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Android phone with AMOLED display.',
      price: 399000,
      rating: 4.6,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/39/09/939/images/2691/2691.970.webp',
      images: [
        'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14',
      description: 'High performance smartphone with great camera.',
      price: 299000,
      rating: 4.5,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/79/09/979/images/2780/2780.970.jpg',
      images: [
        'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1602524205595-4d7b6dc8a6a2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8',
      description: 'Google smartphone with pure Android experience.',
      price: 359000,
      rating: 4.7,
      image: 'https://cdn.new-brz.net/app/public/models/PIXEL8-8128HZ/large/w/240418160017878771.webp',
      images: [
        'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Fast and smooth smartphone with Snapdragon chip.',
      price: 329000,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe78W5Krzq3THKvF0jFjpNBm6qXkuxhbt6-w&s',
      images: [
        'https://images.unsplash.com/photo-1602524205595-4d7b6dc8a6a2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1510557880182-3f8a8d06c2be?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },

    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Lightweight laptop with Apple M2 chip.',
      price: 699000,
      rating: 4.9,
      image: 'https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2023/10/macbook-air-15-display-on-main.jpg?w=1600&h=1600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Dell XPS 13',
      description: 'Premium ultrabook with clean design.',
      price: 750000,
      rating: 4.8,
      image: 'https://forcecom.kz/upload/iblock/720/3skfopcmysj8v312vag87ek26t0y4pva.png',
      images: [
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'HP Spectre x360',
      description: 'Convertible laptop with touchscreen.',
      price: 680000,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJ1h0AKYv0FPsYp_j0ArBplt6arsEUxw38w&s',
      images: [
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo ThinkPad X1',
      description: 'Business laptop for work and study.',
      price: 720000,
      rating: 4.8,
      image: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NDI5MTIyfGltYWdlL3BuZ3xoMjEvaDYyLzEzNzEyNzU2NjM3NzI2LnBuZ3w5NWUyOTIwNDdhNDA1Njk4ZWU4YWE2MGIwZjc5YTQ4YmUwNDQ5YmU1Y2U1Yzc0MWIxMjA3ZWE0YjM1MGFhMTU5/lenovo-laptops-thinkpad-x1-extreme-gen-5-hero.png',
      images: [
        'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'ASUS ROG Zephyrus',
      description: 'Gaming laptop with powerful GPU.',
      price: 890000,
      rating: 4.9,
      image: 'https://api.technodom.kz/f3/api/v1/images/800/800/igrovoj_noutbuk_16_asus_rog_zephyrus_g16_u7_155h_16_1_rtx4060_8_dgu605mv_qr169_277236_2.jpg',
      images: [
        'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },

    {
      id: 11,
      name: 'AirPods Pro',
      description: 'Wireless earbuds with noise cancellation.',
      price: 129000,
      rating: 4.7,
      image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/148/144454839165277fd90429a_original.jpg',
      images: [
        'https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518441902117-f0a23a1f6d0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM',
      description: 'Over-ear headphones with excellent ANC.',
      price: 179000,
      rating: 4.8,
      image: 'https://i5.walmartimages.com/seo/Sony-WH-1000XM5-Noise-Canceling-Wireless-Over-Ear-Headphones-Midnight-Blue_ddb7f93a-a6bb-41ce-9ea5-14dd66fac54d.0e32f60a42f1fad6092b62fe7580fbd5.jpeg',
      images: [
        'https://images.unsplash.com/photo-1518441902117-f0a23a1f6d0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'JBL Tune',
      description: 'Comfortable headphones for everyday use.',
      price: 29990,
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN2G3tiCiqfLqZZw01-r4ZmxQ9dsZdnVZ_g&s',
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518441902117-f0a23a1f6d0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Beats Studio',
      description: 'Stylish headphones with rich bass.',
      price: 159000,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYgzYENuwAL0B4JBg1ASHwARFb7n1o9uj3Q&s',
      images: [
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518441902117-f0a23a1f6d0c?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'HyperX Cloud',
      description: 'Gaming headset with good microphone.',
      price: 49990,
      rating: 4.6,
      image: 'https://images.satu.kz/208790493_w1280_h640_208790493.jpg',
      images: [
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518441902117-f0a23a1f6d0c?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },

    {
      id: 16,
      name: 'iPad Air',
      description: 'Tablet with great performance for study.',
      price: 299000,
      rating: 4.7,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/83/05/583/images/1992/1992.970.jpg',
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab',
      description: 'Android tablet with large screen.',
      price: 249000,
      rating: 4.6,
      image: 'https://cdn.new-brz.net/app/public/models/SM-T865ZAASEK/large/w/220713160033957272.webp',
      images: [
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad',
      description: 'Affordable tablet for everyday tasks.',
      price: 189000,
      rating: 4.5,
      image: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_1063_0_1_OApjAU.webp',
      images: [
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Lenovo Tab',
      description: 'Tablet for media and browsing.',
      price: 139000,
      rating: 4.4,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/25d/0jw222l1il22g13ei2lmrmi7pcnkzpnv/450_450_1/180163_01_1.webp',
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Huawei MatePad',
      description: 'Solid tablet with good battery life.',
      price: 219000,
      rating: 4.6,
      image: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/9/193030_2024.jpg?auto=webp&format=pjpg&width=640',
      images: [
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 21,
      name: 'Huawei',
      description: 'ffffffff',
      price: 219000,
      rating: 4.6,
      image: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/9/193030_2024.jpg?auto=webp&format=pjpg&width=640',
      images: [
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80'
      ],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    }

    
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}