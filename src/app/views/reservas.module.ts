import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../lib/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { PerfilComponent } from './perfil/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ComponentsModule, ReactiveFormsModule,DynamicFormModule
  ],
  declarations: [LoginComponent,RegisterComponent, PerfilComponent],
  exports: [LoginComponent,RegisterComponent,PerfilComponent],
  providers:[AuthenticationService, AlertService], 
})
export class ReservasModule { }
