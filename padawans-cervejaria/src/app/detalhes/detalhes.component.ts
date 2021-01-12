import { DetalheService } from './../services/detalhe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  titulo = "voltar";
  icon = "keyboard_backspace";
  image = " ";
  toolTip = "voltar para lista de cervejas";
  id: string;
  result;
  imagem = " ";
  name = " ";
  description = " ";
  malt = [];
  hops = [];
  yeast = " ";
  volumeValue = " ";
  volumeUnite = " ";
  ph = " ";
  abv = " ";

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
      this.imagem = this.result.image_url;
      this.name = this.result.name;
      this.description = this.result.description;
      this.malt = this.result.ingredients.malt;
      this.hops = this.result.ingredients.hops;
      this.yeast = this.result.ingredients.yeast;
      this.volumeValue = this.result.volume.value;
      this.volumeUnite = this.result.volume.unit;
      this.ph = this.result.ph;
      this.abv = this.result.abv;
    })
    
  }

}
