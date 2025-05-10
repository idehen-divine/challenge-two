import { Injectable } from '@angular/core';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected product: Product[] = [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      price: 250,
      description: 'These low-profile sneakers are your  perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
      images: [
        './images/image-product-1.jpg',
        './images/image-product-2.jpg',
        './images/image-product-3.jpg',
        './images/image-product-4.jpg'
      ],
      thumbnails: [
        './images/image-product-1-thumbnail.jpg',
        './images/image-product-2-thumbnail.jpg',
        './images/image-product-3-thumbnail.jpg',
        './images/image-product-4-thumbnail.jpg'
      ],
      discount: 50
    }
  ]

  getProducts() {
    return this.product;
  }
}
