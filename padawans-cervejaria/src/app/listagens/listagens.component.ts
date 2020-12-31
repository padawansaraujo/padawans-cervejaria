import { Observable } from 'rxjs';
import { ListagensService } from './../services/listagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.component.html',
  styleUrls: ['./listagens.component.css']
})
export class ListagensComponent implements OnInit {


  constructor(private _listagensServices:ListagensService) { }

  beers = [];
  page = 1;
  per_page = 12;

  ngOnInit(): void {
    this.getBeer();
    
  }
  
  getBeer(){
  this._listagensServices.getBeers(this.page, this.per_page).subscribe( res =>  {
    this.beers = res
    console.log(res)
  })
}


paginaAnterior() {
  this.page--;
  this.getBeer();
}

proximaPagina() {
  this.page++;
  this.getBeer();
}

}
