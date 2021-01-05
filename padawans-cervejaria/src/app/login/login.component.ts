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
    private _service: LoginService,
    
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
        this._service.login(this.auth2, this.loginElement);
      });
    }
    this.modalGoogle();
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

  

  ngOnDestroy() { 
    document.body.classList.remove('bg-img');
  }

}
