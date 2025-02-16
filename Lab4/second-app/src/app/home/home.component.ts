import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from '../products/products.component';
import {Products} from '../products';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductsComponent],
  template: `
   <section class="results">
      <app-products
      *ngFor="let products of ProductsList"
      [products] = "products"
      ></app-products>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ProductsList: Products[] = [
    {
      id: 9999,
      name: 'Apple iPhone 13 128Gb Black',
      image: 'assets/iphone13_black.png',
      description: 'The iPhone 13 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.',
      rating: '5.0',
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },
    {
      id: 9996,
      name: 'Samsung Galaxy A25 5G 6 Gb/128 Gb',
      image: 'assets/sams_a25.png',
      description: 'The Galaxy A25 5G 6.5 inch, Super AMOLED display expresses rich colors and details up to 1000 nits brightness while enhanced with Vision Booster for clear outdoor visibility',
      rating: '5.0',
      kaspi_url: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000',
    },
    {
      id: 9998,
      name: 'Xiaomi Redmi 13C',
      image: 'assets/xiaomi1.png',
      description: 'The Xiaomi Redmi 13C features an ultra-high-performance 2.0 GHz Helio G85 Octo-Core processor for superior performance. Moreover, with 8 GB of RAM and 256 GB of storage space, it lets you install all your applications without the slightest problem.',
      rating: '4.5',
      kaspi_url: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    },
    {
      id: 9997,
      name: 'Apple iPhone 16 Pro Max 256Gb Golden',
      image: 'assets/iphone_16_promax.png',
      description: 'iPhone 16 is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.',
      rating: '5.0',
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    },
    {
      id: 9995,
      name: 'Samsung Galaxy A55 5G 8 Gb/256 Gb Deep Blue',
      image: 'assets/galaxy_a55.png',
      description: ' The new Galaxy A55 is no different, packing solid all-round specs, a large, 6.6-inch display, a capable octa-core processor and a triple rear-camera setup.',
      rating: '4.9',
      kaspi_url: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
    },
    {
      id: 9994,
      name: 'OPPO A78 8 Gb/256 Gb Black',
      image: 'assets/oppo_a78.png',
      description: 'Featuring a stunning 6.42-inch FHD+ AMOLED display, the oppo A78 smartphone showcases vibrant colours and intricate details. Furthermore, its 90Hz refresh rate ensures minimal motion blur during fast-paced scenes or gaming.',
      rating: '4.9',
      kaspi_url: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000',
    },
    {
      id: 9993,
      name: 'Samsung Galaxy S24 Ultra 5G 12 Gb/256 Gb Black',
      image: 'assets/s24_ultra_black.png',
      description: 'Now you can get 2x, 3x, 5x and even 10x close-ups with optical or optical quality zoom. Plus, the new, powerful Tele OIS is wider than before to stabilize the shot for less zoom-in blur. *Optical quality zoom is enabled by the Adaptive Pixel sensor.',
      rating: '4.8',
      kaspi_url: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
    },
    {
      id: 9992,
      name: 'Apple iPhone 13 128Gb Green',
      image: 'assets/iphone13_green.png',
      description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
      rating: '4.9',
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
    },
    {
      id: 9991,
      name: 'Xiaomi Redmi Note 12 Pro+ 5G NFC 8 Gb/256 Gb Black',
      image: 'assets/redmi_12pro.png',
      description: 'Combining certified Dolby Atmos® and Dolby Vision®, you will get an unprecedented audio and visual experience, with high dynamic range and an ultra-wide colour gamut. A seriously smooth 120hz screen makes gaming, media, or even just scrolling look and feel extremely fluid.',
      rating: '4.8',
      kaspi_url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000',
    },
    {
      id: 9990,
      name: ' Apple iPhone 11 64Gb Slim Box Black',
      image: 'assets/iphone_11.png',
      description: 'The iPhone 11 has a 6.1-inch (15 cm) IPS LCD with a resolution of 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio and it is equivalent to the iPhone XR. It supports Dolby Vision, HDR10, True-Tone, and a wide color gamut.',
      rating: '4.9',
      kaspi_url: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000',
    },
  ]
}
