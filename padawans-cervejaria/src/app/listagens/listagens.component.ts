
import { Component, NgZone, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ListagensService } from './../services/listagens.service';



@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.component.html',
  styleUrls: ['./listagens.component.css']
})
export class ListagensComponent implements OnInit {




  titulo = "Cervejas";
  image = "../../assets/images/beers (1).svg";
  icon = " ";
  toolTip = "Mostrar todas as cervejas";
  constructor(
    private _listagensServices: ListagensService,
    private _ngZone: NgZone,
    private _router: Router,
    private activateRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) { }


  beers = [];
  page = 1;
  per_page = 12;

  beer_name;


  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(res => {
      this.beer_name = res.search;
      this.getBeer();
    });


  }

  getBeer() {
    this._listagensServices.getBeers(this.page, this.per_page, this.beer_name).subscribe(res => {
      this.beers = res;
      if (this.page !== 0 && this.beers.length === 0) {
        this._snackBar.open(`Não foram encontrados  resultados para ${this.beer_name}`, '', { duration: 3000 });
        this.beer_name = '';
        this.getBeer();
        return;
      }
    });


  }


  paginaAnterior() {
    --this.page;
    this.getBeer();
  }

  proximaPagina() {
    ++this.page;
    this.getBeer();
  }




  saibaMais(id) {
    this._ngZone.run(() => this._router.navigate(["/detalhe", `${id}`])).then();
  }


}
