import {Component} from '@angular/core';
import { HomeComponent } from 'src/home/home.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  template: `
  <a routerLink='/home'></a>
  <section class="router-section">
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
