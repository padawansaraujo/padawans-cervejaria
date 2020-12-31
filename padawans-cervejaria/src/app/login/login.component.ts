import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth2: any;
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;
  constructor(
    private service: LoginService,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.googleSDK();
  }

  googleSDK() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '121572073016-ndr1p3qdkbhdlm0l98imnig0kat3fdj0.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.login();
      });
    }
    this.modalGoogle();
  }

  login() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let id_token = googleUser.getAuthResponse().id_token;
        this.redirecionar();
      }, (error) => {
        console.log(error);
      });
  }

  modalGoogle() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  redirecionar(){
    this.ngZone.run(() => this.router.navigate(["/listagens"])).then();
  }

  ngOnDestroy() { 
    document.body.classList.remove('bg-img');
  }

}
