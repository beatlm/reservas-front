import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';

import { DatePipe } from '@angular/common';
import { UserModel } from '../model/UserModel';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators/';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private registerUrl = "http://localhost:8080/reservas/register";
  private registerUrl = "https://reservas-aikido-api.herokuapp.com/reservas/register";
//  private loginUrl = "http://localhost:8080/reservas/authenticate";
  private loginUrl = "https://reservas-aikido-api.herokuapp.com/reservas/authenticate";
  constructor(private http: HttpClient,
    public datepipe: DatePipe,
    public alertService: AlertService,
    private router: Router) {}

  public registerUser$(user: UserModel) {
    console.log("Llamamos al register ");
    return this.http.post(this.registerUrl, user);
  }
 
  public login$(user:UserLogin) {
    console.log("Llamamos  login cno "+user.email)
    return this.http
      .post<UserLogin>(this.loginUrl, user).pipe(
       map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {

    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }

 
  
}
