import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ListagensComponent } from './listagens/listagens.component';

const routes: Routes = [
  { path: 'listagens', component: ListagensComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

