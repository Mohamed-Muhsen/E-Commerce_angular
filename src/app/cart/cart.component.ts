import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  getCartData: any;
  storeCartArry: any = [];
  totalAmount: number = 0;
  totalCart: number = 0;
  promoCode: string = '';
  finalAmount: number = 0;
  showToast: boolean = false;
  toastMessage: string = '';

  constructor(private dataStorage: DataStorageService, private router: Router) {}

  ngOnInit(): void {
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData ? this.getCartData.length : 0;
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = 0;
    if (this.getCartData) {
      this.getCartData.forEach((ele: any) => {
        this.totalAmount += ele.pdPrice * ele.plusMinusCounter;
      });
    }
    this.finalAmount = this.totalAmount;
  }

  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cart-data');
    this.storeCartArry = [];
    this.getCartData.filter((ele: any) => {
      if (ele.pdId != data.pdId) {
        this.storeCartArry.push(ele);
        this.totalAmount += ele.pdPrice * ele.plusMinusCounter;
      }
    });
    this.dataStorage.storeCartData(this.storeCartArry);
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
    this.finalAmount = this.totalAmount;
  }

  plusMinusCount(data: any, type: any) {
    this.storeCartArry = [];
    const plusMinusValue = data.plusMinusCounter;
    this.totalAmount = 0;

    if (type == 'minus') {
      let minusCount = plusMinusValue - 1;
      this.getCartData.forEach((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = minusCount;
        }
        this.totalAmount += ele.pdPrice * ele.plusMinusCounter;
      });
    }

    if (type == 'plus') {
      let plusCount = plusMinusValue + 1;
      this.getCartData.forEach((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = plusCount;
        }
        this.totalAmount += ele.pdPrice * ele.plusMinusCounter;
      });
    }

    this.storeCartArry = this.getCartData;
    this.dataStorage.storeCartData(this.storeCartArry);
    this.getCartData = this.dataStorage.getCartData();
    this.finalAmount = this.totalAmount;
  }

  applyPromoCode() {
    if (this.promoCode === '1234') {
      this.finalAmount = this.totalAmount * 0.7;
      this.toastMessage = "Congratulations! You've received a 30% discount!";
      this.showToast = true;
    } else {
      this.toastMessage = 'Invalid promo code!';
      this.showToast = true;
    }

    setTimeout(() => {
      this.showToast = false;
    }, 5000);
  }

  orderClick() {
    localStorage.removeItem('cart-data');
    this.router.navigate(['/']);
  }
}
