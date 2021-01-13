import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { LoginComponent } from './login.component';


const routes = [
  {
      path: '',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    
  ]
})
export class LoginModule { }
