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

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple flagship smartphone with A17 chip. Titanium body and powerful camera system.',
      price: 649000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h6d/84492746297374.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h6d/84492746297374.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/84492746362910.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/hb6/84492746428446.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-natural-titanium-113404588/'
    },

    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Android phone with AI features and AMOLED display.',
      price: 399000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hc1/84703306784798.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hc1/84703306784798.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hda/84703306850334.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h2a/84703306915870.jpg'
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
