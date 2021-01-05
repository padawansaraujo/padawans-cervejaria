import { HeaderComponent } from './../shared/header/header.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private _headeComponent:HeaderComponent) { }


    getFiltros(){
      this._headeComponent.beer_name
      this._headeComponent.form
      this._headeComponent.semEspaco()
    }
}
