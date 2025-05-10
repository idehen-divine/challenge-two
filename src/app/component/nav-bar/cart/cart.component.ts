import { Component, HostListener } from '@angular/core';
import { CartService } from '../../../service/cart/cart.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-bar-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$: Observable<any[]> = of([]);
  isCartVisible = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  getTotalQuantity(cartItems: any[]): number {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(cartItems: any[]): number {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isCartVisible) {
      this.isCartVisible = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const cartElement = document.querySelector('.cart-dropdown');
    const cartToggleButton = document.querySelector('.cart svg');

    if (
      this.isCartVisible &&
      cartElement &&
      !cartElement.contains(event.target as Node)
    ) {
      this.isCartVisible = false;
    }
  }
}
