import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  constructor(  private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm()
    
    
  }

 initForm(){
  this.form = this._formBuilder.group({
  
   pesquisar:[null],

 })}

limpar(){
  this.form = this._formBuilder.group({
    pesquisar:[null]
  })
}
}
