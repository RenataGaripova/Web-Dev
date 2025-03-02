import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsComponent } from 'src/albums/albums.component';
import { Albums } from 'src/albums';
import { CommonModule } from '@angular/common';
import { AlbumsService } from 'src/app/albums.service';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  template: `
    <header class = "header-menu">
      <img src="assets/icons8-home-480.png"> <a routerLink="/home">Home</a>
      <a routerLink='/albums' class="return-link">Return</a>
      <a [routerLink]="['/albums', album.id, 'photos']">Go to Photos</a>   
    </header>
    <section class="album-details">
      <p>Value fot UserId: {{album.userId}}</p>
      <p>Value fot Id: {{album.id}}</p>
      <p>Title: {{album.title}}</p>

      <form #myForm="ngForm" nonvalidate>
        <p>
            <label>Change the Title</label><br>
            <input class="title-input" name="title" ngModel 
              required title /> 
            <button class="save-title" [disabled]="myForm.invalid" (click)="submit(myForm)">Save</button>
        </p>
        
      </form>
      
    </section>
  `,
  styleUrl: 'albums-details.component.css',
  providers: [AlbumsService]
})

@Injectable({
  providedIn: 'root',
})
export class AlbumsDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  album!: Albums;

  submit(form: NgForm) {
    this.album.title=form.value.title;
  }

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(){
    const albumsId = Number(this.route.snapshot.params['id']);
    this.albumsService.getDataById(albumsId).subscribe({next: (data: any) => this.album=data});
  }
}

