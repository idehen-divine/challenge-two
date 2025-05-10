import { Component } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductContainerComponent } from './component/product-container/product-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
      NavBarComponent,
      ProductContainerComponent
  ],
  template: '<app-nav-bar></app-nav-bar><app-product-container></app-product-container>',
})
export class AppComponent {
  title = 'Sneakers - Product Page';
}
