import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, HomeComponent, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/cart.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
       <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title='products';
}
