import { Router } from '@angular/router';
<<<<<<< HEAD
import { ListagensComponent } from './../../listagens/listagens.component';

import { Component,  OnInit, ViewChild } from '@angular/core';
=======
import { Component, Input, OnInit, NgZone } from '@angular/core';
>>>>>>> e106ce6ae8f942706b63992bb40479c41344f49f
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
<<<<<<< HEAD
  

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
=======
  @Input() titulo = '';
  @Input() icon = '';
  @Input() image = '';
  
  constructor(  
    private _formBuilder: FormBuilder,
    private _ngZone: NgZone,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.initForm()    
  }

 initForm(){
  this.form = this._formBuilder.group({
   pesquisar:[null],

 })}
 voltar(){
  this._ngZone.run(() => this._router.navigate(["/listagens"])).then();
 }
>>>>>>> e106ce6ae8f942706b63992bb40479c41344f49f

  ngAfterViewInit() { }

}


