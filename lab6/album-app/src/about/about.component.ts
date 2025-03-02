import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [RouterModule],
  template: `
    <header class = "header-menu">
      <img src="assets/icons8-home-480.png"> <a routerLink="/home">Home</a>
    </header>
    <section class="about-content">
      <p>Some details about the web app.</p>
    </section>
  `,
  styleUrl: 'about.component.css'
})
export class AboutComponent {

}
