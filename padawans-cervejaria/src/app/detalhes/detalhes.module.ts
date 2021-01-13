import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { DetalhesComponent } from './detalhes.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    DetalhesComponent,
    BannerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ]
})
export class DetalhesModule { }
