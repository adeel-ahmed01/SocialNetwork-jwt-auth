import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private registerUrl = "http://localhost:8080/api/users/register"
  private loginUrl = "http://localhost:8080/api/login"
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user){
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('Authorization')
  }

  logoutUser(){
    localStorage.removeItem('Authorization')
    this.router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('Authorization')
  }
}
