import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-table',
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <table [class] ="config.class">
  <tr *ngIf="config.list == undefined || config.list.length== 0">
  "No tienes reservas"
  
  </tr>
  <tr *ngFor="let data of config.list;let i = index">
      <td>{{data.dia}}</td>
      <td>{{data.hora}}</td>
      <td>
          <a class="btn-small" (click)="config.click(i)">
              <i class="material-icons left">delete</i>
          </a>
      </td>
  </tr>
  
</table>
</div>
  `,
  styles: []
})
export class FormTableComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
