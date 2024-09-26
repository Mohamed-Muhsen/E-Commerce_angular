import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() cartCount: number = 0;

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.updateCartCount();
    this.setupMenuToggle();
  }

  updateCartCount(): void {
    const cartData = this.dataStorage.getCartData();
    this.cartCount = cartData ? cartData.length : 0;
  }

  setupMenuToggle(): void {
    const menuToggleBtn = document.getElementById('menuToggle');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggleBtn && mobileMenu) {
      menuToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        console.log('Menu Toggle Clicked, Menu Active:', mobileMenu.classList.contains('active'));
      });
    }

    if (closeMenuBtn && mobileMenu) {
      closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        console.log('Menu Closed');
      });
    } 
  }
}
