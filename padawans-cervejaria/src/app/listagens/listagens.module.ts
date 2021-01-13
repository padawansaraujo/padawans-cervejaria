import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { ListagensComponent } from './listagens.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListagensComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    SharedModule,
  ]
})
export class ListagensModule { }
