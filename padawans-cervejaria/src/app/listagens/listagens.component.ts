<<<<<<< HEAD
import { HeaderService } from './../services/header.service';
import { Observable } from 'rxjs';
import { ListagensService } from './../services/listagens.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListagensService } from './../services/listagens.service';
import { Component, OnInit, NgZone } from '@angular/core';
>>>>>>> e106ce6ae8f942706b63992bb40479c41344f49f

@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.component.html',
  styleUrls: ['./listagens.component.css']
})
export class ListagensComponent implements OnInit {

<<<<<<< HEAD
 
  constructor(private _listagensServices:ListagensService,
    private activateRoute: ActivatedRoute) { }
=======
  titulo = "Cervejas";
  image = "../../assets/images/beers (1).svg";
  icon = " ";
  constructor(
    private _listagensServices:ListagensService,
    private _ngZone : NgZone,
    private _router : Router
    ) { }
>>>>>>> e106ce6ae8f942706b63992bb40479c41344f49f

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
<<<<<<< HEAD
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

=======
  }) 
  }

  saibaMais(id){
    this._ngZone.run(() => this._router.navigate(["/detalhe",`${id}`])).then();
  }
  
>>>>>>> e106ce6ae8f942706b63992bb40479c41344f49f
}
