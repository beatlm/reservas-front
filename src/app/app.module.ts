import { ClasesComponent } from './views/clases/clases/clases.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AlertService } from './services/alert.service';
import { ComponentsModule } from './lib/components/components.module';
import { PerfilComponent } from './views/perfil/perfil/perfil.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DynamicFormModule,
    HttpClientModule,
    ComponentsModule,
    NoopAnimationsModule
  ],
  providers: [DatePipe,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
