  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Product } from '../models/product.model';

  @Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
  })
  export class ProductListComponent {

  products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple flagship smartphone with A17 chip. Titanium body and powerful camera system.',
      price: 899000,  
      rating: 4.8,
      image: 'https://cdn.new-brz.net/app/public/models/MU783HK-A/large/w/241112150012188617.webp',
      images: [
        'https://cdn.new-brz.net/app/public/models/MTQU3LL-A/small/j/250331120232530481.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hQgVuzLUygKOJroj9yZdhaKyGdPmOYS6kg&s',
        'https://cdn.new-brz.net/app/public/models/MU783HK-A/large/w/241112150012188617.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-natural-titanium-113404588/'
    },
    {   
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Android phone with AI features and AMOLED display.',
      price: 599000,   
      rating: 4.6,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/39/09/939/images/2691/2691.970.webp',
      images: [
        'https://gadgetstore.kz/wa-data/public/shop/products/44/09/944/images/2698/2698.970.webp',
        'https://gadgetstore.kz/wa-data/public/shop/products/39/09/939/images/2691/2691.970.webp',
        'https://e-katalog.kz/jpg_zoom1/2603098.jpg '
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-black-113938088/'
    }
  ];

    shareWhatsApp(link: string) {
      window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
    }

    shareTelegram(link: string, name: string) {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`, '_blank');
    }

    changeImage(product: Product, img: string) {
      product.image = img;
    }

    stars(rating: number) {
      return Array(Math.round(rating));
    }
  }
