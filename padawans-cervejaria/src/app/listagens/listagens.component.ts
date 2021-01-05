import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListagensService } from './../services/listagens.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.component.html',
  styleUrls: ['./listagens.component.css']
})
export class ListagensComponent implements OnInit {

  titulo = "Cervejas";
  image = "../../assets/images/beers (1).svg";
  icon = " ";
  constructor(
    private _listagensServices:ListagensService,
    private _ngZone : NgZone,
    private _router : Router
    ) { }

  beers = [];

  ngOnInit(): void {
    this.getBeer();
    
  }
  
  getBeer(){
  this._listagensServices.getBeers().subscribe( res =>  {
    this.beers = res
    console.log(res)
  }) 
  }

  saibaMais(id){
    this._ngZone.run(() => this._router.navigate(["/detalhe",`${id}`])).then();
  }
  
}
