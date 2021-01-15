import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalheService {
  API = 'https://api.punkapi.com/v2/beers';
  constructor(
    private httpClient: HttpClient
  ) { }

  get(id): Observable<any>{

    return this.httpClient.get<any>(`${this.API}/${id}`);
  }
}


