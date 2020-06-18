import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  public loginForm: DynamicFormComponent;
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
      name: "password",
      type: "input",
      label:"Contraseña",
      inputType:"password",
      placeholder: "contraseña",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
      name: "loginButton",
      label: "Entrar",
      type: "button",
      class:"btn btn-success ",
      buttonType: "submit",
      divClass:"d-inline p-2 button",
      click: form => {
      }
    },
    {
      name: "registerButton",
      label: "Soy nuevo",
      type: "button",
      class:"btn btn-success ",
      buttonType: "button",
      divClass:"d-inline p-2 button",
      click: () => {
        this.register();
      }
    }
  ];

  formSubmitted(data) {
    console.log("logando " + data.nombre + "-" + data.password);
    this.reservasService
      .login$(data)
      .subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));
  }

  private isOkAdd(value) {
    console.log("El usuario se ha logado correctamente " + value.nombre);
    this.router.navigate(["perfil"]);
   
  }
  private catchError(err) {
 
    console.log("error " + err);
    alert("No se ha podido logar correctamente");
  }
  private register() {
    this.router.navigate(["register"]);
  }
  constructor(private router: Router,
    private reservasService: AuthenticationService) { }

  ngOnInit() {
  }

}
