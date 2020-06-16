import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  public recipeForm: DynamicFormComponent;
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
      click: (value) => {
        this.formSubmitted(value);
      }
    },
    {
      name: "registerButton",
      label: "Soy nuevo",
      type: "button",
      class:"btn btn-success ",
      buttonType: "button",
      divClass:"d-inline p-2 button",
      click: (value) => {
        this.formSubmitted(value);
      }
    }
  ];

  formSubmitted(value) {
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
