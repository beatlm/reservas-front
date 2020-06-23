import { ClaseModel } from "./../model/ClaseModel";
import { Injectable } from "@angular/core";

import { AlertService } from "./alert.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReservasService {
  private getUserUrl =
    "http://localhost:8080/reservas/api/usuario/findByEmail?email=";
  private getClasesUrl =
    "http://localhost:8080/reservas/api/clase/findByProfesor?profesor=";
  private addClaseUrl = "http://localhost:8080/reservas/api/usuario/";
  private claseUrl = "/clase";
  private deleteClaseToUserUrl = "http://localhost:8080/reservas/api/usuario/";

  constructor(private http: HttpClient) {}

  public getUser$(email: string) {
    console.log("Buscamos la info del usuario: " + email);
    return this.http.get(this.getUserUrl + email);
  }
  public getClases$(profesor: string) {
    console.log("Buscamos la info del usuario: " + profesor);
    return this.http.get(this.getClasesUrl + profesor);
  }
  public addClaseToUser(usuario: string, clase: ClaseModel) {
    console.log("Clase a añadir "+clase);
    return this.http.post(
      this.addClaseUrl + usuario + this.claseUrl,
      clase
    );
  }
  public deleteClaseToUser(usuario:string, claseId: String){
    return this.http.delete(this.deleteClaseToUserUrl+usuario+this.claseUrl+"/"+claseId);
  }
}
