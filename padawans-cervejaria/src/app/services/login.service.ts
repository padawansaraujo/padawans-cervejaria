import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  navigation: string;
  userType: BehaviorSubject<any> = new BehaviorSubject('');
  autenticado: boolean = false;
  usuario = {
    nome: 'sadsad',
    fotoUrl: 'asdsa'
  };
  constructor(
    public http: HttpClient, 
    private router: Router,
    private ngZone: NgZone, 
  ) {

   }
   login(auth2, loginElement) {
    auth2.attachClickHandler(loginElement.nativeElement, {},
      (googleUser) => {
        const id_token = JSON.stringify(googleUser.getAuthResponse().session_state);
        const perfil = googleUser.getBasicProfile();
        //this.usuario = JSON.stringify(perfil.getImageUrl());
        this.usuario.nome = perfil.getName();
        this.usuario.fotoUrl = perfil.getImageUrl();

        window.sessionStorage.setItem('nome',`${this.usuario.nome}`);
        window.sessionStorage.setItem('foto',`${this.usuario.fotoUrl}`);
        this.autenticado = true;

        this.redirecionar();
      }, (error) => {
        console.log(error);
      });
  }
  verificaUsuarioAutenticado(){
    return this.autenticado;
  }
  redirecionar(){
    this.ngZone.run(() => this.router.navigate(["/listagens"])).then();
  }
}
