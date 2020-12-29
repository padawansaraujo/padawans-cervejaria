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

  ngOnInit(): void {
    this.getBeer();
    
  }
  
  getBeer(){
  this._listagensServices.getBeers().subscribe( res =>  {
    this.beers = res
    console.log(res)
  })
    
  }
}
