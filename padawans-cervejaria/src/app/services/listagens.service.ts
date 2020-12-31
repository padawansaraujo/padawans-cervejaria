import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagensService {

  urlApi = 'https://api.punkapi.com/v2';

  constructor(private http:HttpClient) { }

  getBeers(page: number, per_page:number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/beers?page=${page}&per_page=${per_page}`)
  }
}
