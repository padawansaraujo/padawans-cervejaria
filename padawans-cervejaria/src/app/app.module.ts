import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { ListagensModule } from './listagens/listagens.module';
import { DetalhesModule } from './detalhes/detalhes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    ListagensModule,
    DetalhesModule,
    SharedModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
