import { Router } from '@angular/router';
import { ListagensComponent } from './../../listagens/listagens.component';

import { Component,  OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  beer_name = "macaco de asas";
  form: FormGroup;
  

  constructor(private _formBuilder: FormBuilder,
    private _routerLink: Router) {}



  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this._formBuilder.group({

      pesquisar: [null],

    })
  }

  semEspaco() {
    this.beer_name = this.form.get("pesquisar").value
    let palavraSemEspaco = this.beer_name.replace(/ /g, '_');
   return palavraSemEspaco
  }

  buscarCerveja(){
    let query = this.semEspaco()
    this._routerLink.navigate(['/listagens'],{queryParams:{search:query}})
    this.limpar()
  }

  
  limpar() {
    this.form = this._formBuilder.group({
      pesquisar: [null]
    })
  }

  voltar(){
    this._routerLink.navigate(['/listagens'])
  }

  ngAfterViewInit() { }

}


