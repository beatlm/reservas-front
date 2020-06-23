import { ReservasService } from "src/app/services/reservas.service";
import { ClaseModel } from "./../../../model/ClaseModel";
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "src/app/dynamic-form/containers/dynamic-form/dynamic-form.component";
import { UserModel } from "src/app/model/UserModel";

@Component({
  selector: "app-clases",
  template: `
    <div class="container-fluid">
      <mr-dynamic-form
        [config]="config"
        (submitted)="formSubmitted($event)"
        class="dynamicForm"
      >
      </mr-dynamic-form>
    </div>
  `,
  styleUrls: ["./clases.component.css"]
})
export class ClasesComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public clases: Array<ClaseModel>;
  private usuario: UserModel;
  public config = [
    {
      name: "clases",
      type: "table",
      list: this.clases,
      empty: "No hay clases disponibles",
      delete: true,
      buttonOption: "sports_kabaddi",
      click: value => {
        this.seleccionar(value);
      },

      divClass: "container-fluid",
      class: "table table-striped "
    },
    {
      name: "volverButton",
      label: "Volver",
      type: "button",
      class: "btn btn-success ",
      buttonType: "button",
      divClass: "d-inline p-2 button",
      click: () => {
        this.router.navigate(["perfil"]);
      }
    }
  ];
  private seleccionar(value) {
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Seleccionar value "+value);
    this.service
      .addClaseToUser(this.usuario.email, this.config[0].list[value])
      .subscribe(this.addOk.bind(this), this.errorAdd.bind(this));
    console.log(this.config[0].list[value]);
  }
  private errorAdd() {
    console.log("Clase añadida ko");
  }
  private addOk() {
    console.log("Clase añadida ok");
  }
  constructor(private router: Router, private service: ReservasService) {}

  ngOnInit() {
    this.service
      .getClases$("Tomas")
      .subscribe(this.isOk.bind(this), this.catchError.bind(this));
  }
  private isOk(value) {
    console.log("Recibimos :" + JSON.stringify(value));
    this.clases = value;
    this.config[0].list = value;
  }
  private catchError(value) {
    console.log("ko");
  }
}
