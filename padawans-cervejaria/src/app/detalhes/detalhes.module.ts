import { MatCardModule } from '@angular/material/card';
import { AppModule } from './../app.module';
import { DetalhesComponent } from './detalhes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    DetalhesComponent,
    BannerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AppModule
  ]
})
export class DetalhesModule { }
