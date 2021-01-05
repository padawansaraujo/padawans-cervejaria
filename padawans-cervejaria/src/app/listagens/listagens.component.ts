import { HeaderService } from './../services/header.service';
import { Observable } from 'rxjs';
import { ListagensService } from './../services/listagens.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.component.html',
  styleUrls: ['./listagens.component.css']
})
export class ListagensComponent implements OnInit {

 
  constructor(private _listagensServices:ListagensService,
    private activateRoute: ActivatedRoute) { }

  beers = [];
  page = 1;
  per_page = 12; 

  beer_name;

 
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe( res =>  {
      this.beer_name = res.search
      this.getBeer();
    })
    
  
  }
  
  getBeer(){
  this._listagensServices.getBeers(this.page, this.per_page,this.beer_name).subscribe( res =>  {
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
