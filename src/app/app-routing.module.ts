import { PerfilComponent } from './views/perfil/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [

  {
    path: "register",
    component: RegisterComponent,

  },
  {
    path: "",
    component: LoginComponent,

  },
  {
    path: "perfil",
    component: PerfilComponent,

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
