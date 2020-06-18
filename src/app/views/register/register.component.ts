import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild(DynamicFormComponent)

  public config = [
    {
      name: "nombre",
      type: "input",
      label:"Nombre",
      inputType:"email",
      placeholder: "nombre",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
      name: "apellidos",
      type: "input",
      label:"Apellidos",
      inputType:"text",
      placeholder: "apellidos",
      divClass: "container-fluid",
      class:"form-control"
    },
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
      name: "password",
      type: "input",
      label:"Contraseña",
      inputType:"password",
      placeholder: "contraseña",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
      name: "registerButton",
      label: "Registrar",
      type: "button",
      class:"btn btn-success ",
      buttonType: "submit",
      divClass:"d-inline p-2 button",
      click: form => {
      }
    }
  ];

  formSubmitted(value) {
    console.log("Entramos en formsubmitted");
    console.log(value);
    this.reservasService.registerUser$(value) .subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));
  }

  private isOkAdd(value) {
     
    this.router.navigate(["search"]);
    console.log("El usuario se ha logado correctamente " + value.name);
  }
  private catchError(err) {
 
    console.log("error " + err);
    alert("No se ha podido logar correctamente");
  }
    
  

  constructor(private router: Router,
    private reservasService: AuthenticationService) { }


  ngOnInit() {
  }

}
