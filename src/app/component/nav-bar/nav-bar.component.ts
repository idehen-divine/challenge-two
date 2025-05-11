import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
@Component({
  selector: 'app-nav-bar',
  imports: [CartComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
