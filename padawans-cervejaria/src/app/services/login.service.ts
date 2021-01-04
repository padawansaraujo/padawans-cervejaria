import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  navigation: string;
  userType: BehaviorSubject<any> = new BehaviorSubject('')
  autenticado: boolean = false
  constructor(
    public http: HttpClient, 
    private router: Router,
    private ngZone: NgZone, 
  ) {

   }
   login(auth2, loginElement) {
    auth2.attachClickHandler(loginElement.nativeElement, {},
      (googleUser) => {
        //const id_token = googleUser.getAuthResponse().id_token;
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
