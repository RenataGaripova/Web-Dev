import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterOutlet, RouterLink],
  template: `
    <section class="home-page">
        <img src="assets/icons8-home-480.png">
        <div class = "info">
          <p class="header-1">Welcome to the Albums App!</p>
          <ul class="links">
            <li><a routerLink='about'>Learn about the app...</a></li>
            <li><a routerLink='albums'>See the albums list...</a></li>
          </ul>
        </div>
        <div>
          <router-outlet></router-outlet>
        </div>
    </section> 
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}