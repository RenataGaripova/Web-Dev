import {Routes} from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from 'src/about/about.component';
import { AppComponent } from './app.component';
import { AlbumsComponent } from 'src/albums/albums.component';
import { AlbumsDetailsComponent } from 'src/albums-details/albums-details.component';
import { AlbumPhotosComponent } from 'src/album-photos/album-photos.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'home/about',
    component: AboutComponent,
    title: 'About details',
  },
  {
    path: 'home/albums',
    component: AlbumsComponent,
    title: 'List of albums',
  },
  {
    path: 'home/albums/:id',
    component: AlbumsDetailsComponent,
    title: 'Albums details',
  },
  {
    path: 'home/albums/:id/photos',
    component: AlbumPhotosComponent,
    title: 'Albums Photos',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'albums/:id',
    redirectTo: '/home/albums/:id',
    pathMatch: 'full'
  },
  {
    path: 'albums/:id/photos',
    redirectTo: '/home/albums/:id/photos',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    redirectTo: '/home/albums',
    pathMatch: 'full'
  },
];

export default routeConfig;