import  {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductList} from '../product-list';
import {RouterModule} from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductItem } from '../product-item';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  template: `
    <section class="category">
      <img
        class="category-photo"
        [src]="productlist.photo"
        alt="Exterior photo of {{productlist.category_name}}"
        crossorigin
      />
       <h2 class="category-heading">{{ productlist.category_name }}</h2>
       <p class="category-description">{{ productlist.description }}</p>
       <a [routerLink]="['/productitem', productlist.category_id]" class="category-link"> 
       Shop Items
       </a>
    </section>
  `,
  styleUrl: `product-list.component.css`
})

export class ProductListComponent {
  @Input() productlist!: ProductList;
}
