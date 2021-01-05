import { DetalheService } from './../services/detalhe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  titulo = "voltar a lista de cervejas";
  icon = "keyboard_backspace";
  image = " ";
  id: string;
  result;

  constructor(
    private _route: ActivatedRoute,
    private _service: DetalheService
  ) { }

  ngOnInit(): void {
    
    this.id =this._route.snapshot.params.id;
    this.getCerveja(this.id);
  }

  getCerveja(id){
    this._service.get(id).subscribe(resultado => {
      this.result = resultado[0];
      console.log(this.result);
    })
    
  }

}
