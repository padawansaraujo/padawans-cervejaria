import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ListagensComponent } from './listagens/listagens.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'listagens', component: ListagensComponent,
    canActivate: [AuthGuard]
  },
  { path: 'detalhe/:id', component: DetalhesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

