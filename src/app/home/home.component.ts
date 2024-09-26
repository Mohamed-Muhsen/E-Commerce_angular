import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerImgs = [
    { id: 1, img: '../../assets/images/banner/banner4.jpg' },
    { id: 2, img: '../../assets/images/banner/banner5.jpg' },
    { id: 3, img: '../../assets/images/banner/banner3.jpg' },
    { id: 4, img: '../../assets/images/banner/banner1.jpg' },
    { id: 5, img: '../../assets/images/banner/banner2.jpg' },
  ];

  categoriesData: any;
  productsByCategory: any[] = [];
  showToast = false;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.categoriesData = this.getData.categoriesData;
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    this.categoriesData.forEach((category: any) => {
      const product = this.getData.productData.find((prod: any) => prod.pdCategory === category.code);
      if (product) {
        this.productsByCategory.push({ category, product });
      }
    });
  }

  scrollToCategories() {
    this.showToast = true; 
    setTimeout(() => {
      this.showToast = false; 
    }, 5000);

    const categoriesSection = document.querySelector('.categorisBox') as HTMLElement;
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
