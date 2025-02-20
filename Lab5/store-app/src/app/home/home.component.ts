import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductList } from '../product-list';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductListComponent],
  template: `
    <section class="categories">
     <app-product-list
        *ngFor="let productlist of CategoryList" 
        [productlist]="productlist"
        ></app-product-list>
    </section>
  `,
  styles: ``
})
export class HomeComponent {
  CategoryList: ProductList [] = [
    {
      category_id:0,
      category_name: 'Smartphones',
      photo: 'assets/phones.png',
      description: 'Explore our wide selection of smartphones, featuring the latest models with powerful performance, stunning displays, and advanced cameras for every need.',
    },
    {
      category_id:1,
      category_name: 'Laptops',
      photo: 'assets/laptop.png',
      description: 'Our store offers a wide variety of laptops, from budget-friendly options to high-performance models, perfect for work, gaming, or everyday use.',
    },
    {
      category_id:2,
      category_name: 'Smartwatch',
      photo: 'assets/watch.png',
      description: 'Discover our diverse range of smartwatches, offering fitness tracking, notifications, and stylish designs to keep you connected and active throughout the day.',
    },
    {
      category_id:3,
      category_name: 'Earphones and Headphones',
      photo: 'assets/head.png',
      description: 'Enjoy premium sound with our extensive collection of headphones and earphones, including wireless, noise-canceling, and high-fidelity options for music lovers and professionals alike.',
    },
  ]
}
