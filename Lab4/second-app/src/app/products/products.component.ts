import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Products} from '../products';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
   <section class="listing">
      <img
        class="listing-image"
        [src]="products.image"
        alt="Exterior photo of {{ products.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ products.name }}</h2>
      <p class="listing-rating">Rating: {{ products.rating }}</p>
      <p class="listing-description">{{ products.description }}</p>
      <section class="listing-buttons"> 
        <a href = "https://t.me/share/url?url={{ products.kaspi_url }}" class="listing-share-tg"  target="_blank"> Share Telegram </a>
        <a class="listing-share-wp" href="https://wa.me/?text={{ products.kaspi_url }}." target="_blank"> Share Whatsapp </a>
        <a class="listing-kaspi" href={{products.kaspi_url}} target="_blank">Go to Kaspi</a>
      </section>
    </section>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() products!: Products;
}

