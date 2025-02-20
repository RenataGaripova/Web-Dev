import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ProductList } from '../product-list';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, ProductListComponent],
  template: `
  <ng-container *ngFor="let productItem of productListElements"> 
  <section class="listing" *ngIf="productItem.isVisible">
      <img
        class="listing-image"
        [src]="productItem.image"
        alt="Exterior photo of {{ productItem.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ productItem.name }}</h2>
      <p class="listing-rating">Rating: {{ productItem.rating }} Likes: {{ productItem.likes }}</p>
      <p class="listing-description">{{ productItem.description }}</p>
      <section class="listing-buttons"> 
        <a href = "https://t.me/share/url?url={{ productItem.kaspi_url }}" class="listing-share-tg"  target="_blank"> Share Telegram </a>
        <a class="listing-share-wp" href="https://wa.me/?text={{ productItem.kaspi_url }}." target="_blank"> Share Whatsapp </a>
        <a class="listing-kaspi" href={{productItem.kaspi_url}} target="_blank">Go to Kaspi</a>
      </section>
      <button (click)="sendLike(productItem)" class="like-button">Like!</button>
      <button (click)="hideProduct(productItem)" class="remove-button">Remove</button>
    </section>
    </ng-container>
    `
    ,
  styleUrl: `product-item.component.css`
})
export class ProductItemComponent {
  @Input() productItem!: ProductItem;
  @Input() likes: number = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  categoryId = -1;

  sendLike(productItem: ProductItem) {
    productItem.likes += 1;
  }

  hideProduct (productItem: ProductItem) {
    productItem.isVisible = !productItem.isVisible;
  }
  
  constructor() {
    this.categoryId = Number(this.route.snapshot.params['category_id']);
    if (this.categoryId == 0) {
      this.productListElements = this.products_0;
    }
    else if (this.categoryId == 1) {
      this.productListElements = this.products_1;
    }
    else if (this.categoryId == 2) {
      this.productListElements = this.products_2;
    }
    else if (this.categoryId == 3) {
      this.productListElements = this.products_3;
    }
  }

  productListElements: ProductItem[] = [];
  products_0: ProductItem[] = [
    {
      category_id: 0,
      name: 'Apple iPhone 13 128Gb Black',
      image: 'assets/iphone13_black.png',
      description: 'The iPhone 13 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 9996,
      name: 'Samsung Galaxy A25 5G 6 Gb/128 Gb',
      image: 'assets/sams_a25.png',
      description: 'The Galaxy A25 5G 6.5 inch, Super AMOLED display expresses rich colors and details up to 1000 nits brightness while enhanced with Vision Booster for clear outdoor visibility',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 9998,
      name: 'Xiaomi Redmi 13C',
      image: 'assets/xiaomi1.png',
      description: 'The Xiaomi Redmi 13C features an ultra-high-performance 2.0 GHz Helio G85 Octo-Core processor for superior performance. Moreover, with 8 GB of RAM and 256 GB of storage space, it lets you install all your applications without the slightest problem.',
      rating: '4.5',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 9997,
      name: 'Apple iPhone 16 Pro Max 256Gb Golden',
      image: 'assets/iphone_16_promax.png',
      description: 'iPhone 16 is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 9995,
      name: 'Samsung Galaxy A55 5G 8 Gb/256 Gb Deep Blue',
      image: 'assets/galaxy_a55.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
  ]

  products_1: ProductItem[] = [
    {
      category_id: 1,
      name: 'Laptop ThundeRobot 911 X Wild Hunter G2 Pro 15.6"/16 Gb/SSD 512 Gb/',
      image: 'assets/ThundeRobot 911.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 1,
      name: 'Apple MacBook Air 13 2022 13.6"/8 Gb/SSD 256 Gb/',
      image: 'assets/Apple MacBook Air 13.png',
      description: 'The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 1,
      name: 'Acer Gadget E10 ETBook 14"/16 Gb/SSD 512 Gb',
      image: 'assets/Acer Gadget E10.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 1,
      name: 'ASUS Vivobook Go 15 15.6"/16 Gb/SSD 512 Gb',
      image: 'assets/ASUS Vivobook Go 15.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/asus-vivobook-go-15-15-6-16-gb-ssd-512-gb-dos-e1504fa-bq664-90nb0zr2-m012z0-114694100/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 1,
      name: 'Apple MacBook Pro 16 2021 16.2"/16 Gb/SSD 512 Gb',
      image: 'assets/Apple MacBook Pro 16.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-16-gb-ssd-512-gb-macos-mk183-102892102/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
  ]
  products_2: ProductItem[] = [
    {
      category_id: 2,
      name: 'Apple Watch SE GPS Gen.2 2024 S/M',
      image: 'assets/apple1.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.8',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 2,
      name: ' Xiaomi Redmi Watch 5 Active 51mm',
      image: 'assets/xiam_watch1.png',
      description: 'The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.7',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 2,
      name: 'Huawei Watch Fit 3',
      image: 'assets/huaw1.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/huawei-watch-fit-3-chernyi-119668941/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 2,
      name: 'Watches Y-13 SW 43 mm',
      image: 'assets/Y-13 SW .png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/y-13-sw-43-mm-zolotistyi-zolotistyi-112273482/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 2,
      name: 'Huawei Watch GT 5 Pro 46 mm',
      image: 'assets/huaw2.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/huawei-watch-gt-5-pro-46-mm-chernyi-chernyi-124097507/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
  ]
  products_3: ProductItem[] = [
    {
      category_id: 3,
      name: ' Apple AirPods 3 with Lightning Charging Case',
      image: 'assets/pods3.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 3,
      name: 'Apple AirPods Pro 2',
      image: 'assets/pods2.png',
      description: 'The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 3,
      name: 'HeadPhones OEM P9',
      image: 'assets/OEM P9.png',
      description: 'The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.8',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 3,
      name: 'Newest M10 Newest',
      image: 'assets/newest.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/newest-m10-newest-chernyi-102272027/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
    {
      category_id: 3,
      name: 'Marshall Major IV',
      image: 'assets/marshall.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '5.0',
      likes: 0,
      kaspi_url: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
      isLiked: true,
      isVisible: true,
    },
  ]

  
  

  
  
}
