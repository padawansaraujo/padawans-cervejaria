import { AppRoutingModule } from './app-routing.module';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { ListagensComponent } from './listagens/listagens.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagensComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
