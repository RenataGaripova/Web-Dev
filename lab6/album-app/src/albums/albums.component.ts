import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from "@angular/common/http";
import { AlbumsService } from 'src/app/albums.service';
import { Albums } from 'src/albums';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-albums',
  imports: [HttpClientModule, RouterModule, NgIf],
  template: `
   <header class = "header-menu">
      <img src="assets/icons8-home-480.png"> <a routerLink="/home">Home</a>
    </header>
    <ul class="albums-list">
                @for(album of albumsList; track $index){
                <li class="album" *ngIf="album.isVisible">
                        <img src="./assets/icon.png">
                        <p>Value fot Id: {{album.id}}</p>
                        <button [routerLink]="['/albums', album.id]" class="description-button">Description...</button>
                        <button  (click)="hideAlbum(album)" class="remove-button">Remove</button>
                  </li>
            }
            </ul>,
  `,
  styleUrl: 'albums.component.css',
  providers: [AlbumsService],
})

@Injectable({
  providedIn: 'root',
})
export class AlbumsComponent implements OnInit {
  albumsList: Albums[]=[];

  hideAlbum (album: Albums) {
    album.isVisible = !album.isVisible;
  }
      
    constructor(private albumsService: AlbumsService){}

    ngOnInit(){
      this.albumsService.getData().subscribe({next: (data: any) => this.albumsList=data});
  }
}
