import { UserModel } from './../../../model/UserModel';
import { ClaseModel } from './../../../model/ClaseModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-perfil',
  template: `<div class="container-fluid">
  <h3 class="title">Mis reservas</h3>
<h4>Hola {{usuario.nombre}}</h4>
<mr-dynamic-form 
  [config]="config"
  (submitted)="formSubmitted($event)"
  class="dynamicForm">
</mr-dynamic-form>
</div> `
,  styleUrls: ['./perfil.component.css']
})
 
export class PerfilComponent implements OnInit {
  private usuario: UserModel;

  private reservas: ClaseModel [] ;
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public config = [
    
    {
    name: "perfil",
    type: "table",
    list:this.reservas,
    divClass: "container-fluid",
    class:"form-control"
  }, {
    name: "disponiblesButton",
    label: "Ver disponibles",
    type: "button",
    class:"btn btn-success ",
    buttonType: "button",
    divClass:"d-inline p-2 button",
    click: () => {
      this.router.navigate(["clases"]);
    }
  }

];

  constructor(private router: Router,
    private reservasService: ReservasService) { 
      console.log("constructor");
      console.log(this.myForm);
     // this.reservas=[new ClaseModel("2019-01-01", "23:00:00")];
    }
private isOk(data){
  console.log("Recibimos :"+JSON.stringify(data));

  this.reservas=data.reservas;
console.log(data.reservas.length);
console.log(this.reservas);
  if(this.reservas.length==0){
    console.log("Reservas es null")
   // this.config[1].list=new Array(new ClaseModel("No tienes reservas",""));
  }else{
  
    this.config[1].list=this.reservas;//TODO precargar clases
  }
}
private catchError(data){
  console.log("error en la llamada para obtener reservas");
  //Mostrar alert de error al cargar las reservas
}

  ngOnInit() {
   this.usuario =JSON.parse(localStorage.getItem("currentUser"));
  this.reservasService.getUser$(this.usuario.email).subscribe(this.isOk.bind(this), this.catchError.bind(this));//TODO obtener email
  
  }

}