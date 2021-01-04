import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  navigation: string;
  userType: BehaviorSubject<any> = new BehaviorSubject('')

  constructor(
    public http: HttpClient, 
    private routerLink: Router
  ) {
    
   }
}
