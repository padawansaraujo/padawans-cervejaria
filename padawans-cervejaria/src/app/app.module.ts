import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListagensComponent } from './listagens/listagens.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './services/login.service';
import { BannerComponent } from './shared/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagensComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
 
  ],
  providers: [
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
