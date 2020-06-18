import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../../services/alert.service';
import { TmFormatPipe } from './pipes/tm.format.pipe';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ HeaderComponent, AlertComponent, TmFormatPipe],
  exports: [HeaderComponent,AlertComponent, TmFormatPipe],
  providers: [AlertService]
})

export class ComponentsModule { }
