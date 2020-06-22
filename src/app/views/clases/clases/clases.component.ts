import { ReservasService } from 'src/app/services/reservas.service';
import { ClaseModel } from './../../../model/ClaseModel';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-clases',
  template: 
  `<div class="container-fluid">
    <mr-dynamic-form 
    [config]="config"
    (submitted)="formSubmitted($event)"
    class="dynamicForm">
    </mr-dynamic-form>
   </div> 
`,
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  private clases: Array <ClaseModel>;
  public config = [
    
    {
    name: "clases",
    type: "table",
    list:this.clases,
    divClass: "container-fluid",
    class:"form-control"
  }, {
    name: "volverButton",
    label: "Volver",
    type: "button",
    class:"btn btn-success ",
    buttonType: "button",
    divClass:"d-inline p-2 button",
    click: () => {
      this.router.navigate(["perfil"]);
    }
  }

];
  constructor(private router:Router,
    private service:ReservasService) { }

  ngOnInit() {
    this.service.getClases$("Tomas").subscribe(this.isOk.bind(this),this.catchError.bind(this));
  }
  private isOk(value){
console.log("ok");
  }
  private catchError(value){
console.log("ko");
  }

}
