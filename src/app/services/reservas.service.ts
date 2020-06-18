import { Injectable } from '@angular/core';
 
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private getUserUrl = "http://localhost:8080/usuarios/";

  constructor(private http: HttpClient,
    
    public alertService: AlertService,
    private router: Router) {}

  public getUser$(email: string) {
    console.log("Buscamos la info del usuario");
    return this.http.get(this.getUserUrl+email);
  }
 

}
