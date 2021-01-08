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
  autenticados: boolean = false;
  usuario = {
    nome: '0',
    fotoUrl: '0',
    token: '0'
  };

  constructor(
    public http: HttpClient, 
    private router: Router,
    private ngZone: NgZone, 
  ) {}
  
   login(auth2, loginElement) {
    auth2.attachClickHandler(loginElement.nativeElement, {},
      (googleUser) => {
        
        const perfil = googleUser.getBasicProfile();
        
        this.usuario.nome = perfil.getName();
        this.usuario.fotoUrl = perfil.getImageUrl();
        this.usuario.token =  googleUser.getAuthResponse().id_token;

        this.setUser();

        this.redirecionar();
      }, (error) => {
        console.log(error);
      });
  }

  setUser(){
    window.sessionStorage.setItem('nome',`${this.usuario.nome}`);
    window.sessionStorage.setItem('foto',`${this.usuario.fotoUrl}`);
    window.sessionStorage.setItem('token',`${this.usuario.token}`);
  }

  redirecionar(){
    this.ngZone.run(() => this.router.navigate(["/listagens"])).then();
  }

  autenticado(){
    let token = window.sessionStorage.getItem('token');
    if (token != null && token != 'undefined' && token != '0'){
      
      return true;
    } 
  }
}
