import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private cartItemsSubject = new BehaviorSubject<any[]>([]);
	cartItems$ = this.cartItemsSubject.asObservable();

	getItems() {
		return this.cartItemsSubject.value;
	}

	addItem(item: any) {
		const items = this.cartItemsSubject.value;
		const existingItemIndex = items.findIndex(existingItem => existingItem.name === item.name);

		if (existingItemIndex >= 0) {
			items[existingItemIndex].quantity += item.quantity;
		} else {
			items.push(item);
		}

		this.cartItemsSubject.next([...items]);
	}

	removeItem(item: any) {
		const updatedItems = this.cartItemsSubject.value.filter(cartItem => cartItem !== item);
		this.cartItemsSubject.next(updatedItems);
	}

}
