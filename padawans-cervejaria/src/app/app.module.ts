import { DetalhesModule } from './detalhes/detalhes.module';
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
import { DetalhesComponent } from './detalhes/detalhes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagensComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule    
  ],
  providers: [ AuthGuard ],
  exports: [ HeaderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
