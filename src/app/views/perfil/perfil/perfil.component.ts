import { ClaseModel } from './../../../model/ClaseModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
 
export class PerfilComponent implements OnInit {
  private clases: ClaseModel [] ;
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public config = [
    {
      name: "email",
      type: "input",
      label:"E-mail",
      inputType:"email",
      placeholder: "e-mail",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
    name: "perfil",
    type: "table",
    list:this.clases,
    divClass: "container-fluid",
    class:"form-control"
  }];

  constructor(private router: Router,
    private reservasService: ReservasService) { 
      console.log("constructor");
      console.log(this.myForm);
      this.clases=[new ClaseModel("2019-01-01", "23:00:00")];
    }
private isOk(data){
  console.log(data);
}
private catchError(data){
  console.log("error en la llamda");
}

  ngOnInit() {

  this.reservasService.getUser$("beatlm@gmail.com").subscribe(this.isOk.bind(this), this.catchError.bind(this));//TODO obtener email
  this.config[1].list=this.clases;//TODO precargar clases
  }

}