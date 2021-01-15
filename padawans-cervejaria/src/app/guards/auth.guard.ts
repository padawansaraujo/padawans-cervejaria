import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {

    if (this.loginService.autenticado()){
      return true;
    }
    this.router.navigate(['']);
    return false;
    }
}
