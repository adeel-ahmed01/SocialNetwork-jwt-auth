import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          // Store the token in the browser local storage
          localStorage.setItem('Authorization', res.Authorization)
          this.router.navigate(['/topics'])
        },
        err => console.error(err)
      )
  }
}
