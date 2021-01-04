import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.loginService.verificaUsuarioAutenticado()){
      return true;
    }
    this.router.navigate(['']);
    return false;
    }
}
