import { Router } from '@angular/router';
import { Component, Input, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;
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


}
