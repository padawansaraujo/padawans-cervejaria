import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth2: any;
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }

}
  