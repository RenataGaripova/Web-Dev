import { Component, inject, OnInit } from '@angular/core';
import { AlbumPhotos } from 'src/album-photos';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { AlbumsService } from 'src/app/albums.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  template: `
    <header class = "header-menu">
      <img src="assets/icons8-home-480.png"> <a routerLink="/home">Home</a>
      <a [routerLink]="['/albums', albumId]" class="return-link">Return</a>
    </header>
    <ng-container *ngFor="let albumPhoto of albumPhotos" class="album-photos"> 
      <section class="photo">
          <img src={{albumPhoto.thumbnailUrl}}>
          <p>Value fot Id: {{albumPhoto.id}}</p>
      </section>
    </ng-container>
  `,
  styleUrl: 'album-photos.component.css',
  providers:[AlbumsService],
})

@Injectable({
  providedIn: 'root',
})
export class AlbumPhotosComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  albumPhotos: AlbumPhotos[]=[];
  albumId = Number(this.route.snapshot.params['id']);
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(){
    console.log('PhotosComponent loaded!');
    this.albumsService.getPhotosById(this.albumId,`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`).subscribe({next: (data: any) => this.albumPhotos=data.map((photo: { thumbnailUrl: string; }) => ({
      ...photo,
      thumbnailUrl: photo.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com')}))
    });
}
}
