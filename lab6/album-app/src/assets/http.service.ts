import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Albums } from "src/albums";
@Injectable({
    providedIn: 'root',
  })
export class HttpService{
   url = 'https://jsonplaceholder.typicode.com/albums';
    constructor(private http: HttpClient){ }
       
    getData() {
        return this.http.get(this.url)
    }

    getDataById(id: number) {
        const data = this.http.get(`${this.url}/${id}`);
        return data
    }
}