import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Albums } from "src/albums";
import { map } from "rxjs";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
  })
export class AlbumsService{
   url = 'https://jsonplaceholder.typicode.com/albums';
   
   constructor(private http: HttpClient){ }

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.url).pipe(
            map(albums => 
              albums.map(album => ({
                ...album,
                isVisible: album.isVisible ?? 1
              }))
            )
          );
        }
      

    getDataById(id: number) {
        const data = this.http.get(`${this.url}/${id}`);
        return data;
    }

    getPhotosById(id: number, url_photos:string) {
        const data = this.http.get(url_photos);
        return data;
    }
}