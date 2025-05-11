import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product/product.service';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  private slideIntervalId: any;

  products: any[] = [];
  currentProductIndex = 0;
  currentImageIndex = 0;
  quantity = 1;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.slideIntervalId = setInterval(() => this.nextImage(), 4000);
  }

  get currentProduct() {
    return this.products[this.currentProductIndex];
  }

  get activeImage(): string {
    return this.currentProduct.images[this.currentImageIndex];
  }

  get activeThumbnail(): string {
    return this.currentProduct.thumbnails[this.currentImageIndex];
  }

  ngOnDestroy(): void {
    clearInterval(this.slideIntervalId);
  }

  setActiveThumbnail(thumbnail: string) {
    this.currentImageIndex = this.currentProduct.thumbnails.indexOf(thumbnail);
  }

  nextImage() {
    const total = this.currentProduct.images.length;
    this.currentImageIndex = (this.currentImageIndex + 1) % total;
  }

  prevImage() {
    const total = this.currentProduct.images.length;
    this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(product: any, quantity: number) {
    if (quantity <= 0) return;

    const finalPrice = product.price * (1 - product.discount / 100);

    this.cartService.addItem({
      image: product.images[0],
      name: product.name,
      price: finalPrice,
      quantity
    });
    this.quantity = 1;
  }

  lightboxOpen = false;

  openLightbox() {
    this.lightboxOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.classList.remove('no-scroll');
  }

}
