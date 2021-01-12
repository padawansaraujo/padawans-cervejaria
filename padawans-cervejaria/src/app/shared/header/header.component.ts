import { Router } from '@angular/router';

import { Component, Input, OnInit, NgZone } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  beer_name = "macaco de asas";
  form: FormGroup;
  
  usuario = {
    nome: '0',
    fotoUrl: '0'
  };


 

  @Input() titulo = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() toolTip = '';
  

  
  constructor(  
    private _formBuilder: FormBuilder,
    private _ngZone: NgZone,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();   
    this.getUser();
  }

 initForm(){
  this.form = this._formBuilder.group({
   pesquisar:[null],

 })} 

 getUser(){
  this.usuario.nome = window.sessionStorage.getItem('nome');
  this.usuario.fotoUrl = window.sessionStorage.getItem('foto');
 }

 voltar(){
  this._ngZone.run(() => this._router.navigate(["/listagens"])).then();
 }
 

  ngAfterViewInit() { }



semEspaco() {
  this.beer_name = this.form.get("pesquisar").value
  let palavraSemEspaco = this.beer_name.replace(/ /g, '_');
 return palavraSemEspaco
}

buscarCerveja(){
  let query = this.semEspaco()
  this._router.navigate(['/listagens'],{queryParams:{search:query}})
  this.limpar()
}


limpar() {
  this.form = this._formBuilder.group({
    pesquisar: [null]
  })
}

sair(){
  window.sessionStorage.clear();
  location.reload();
}

}


