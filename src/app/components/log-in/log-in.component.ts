import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  styleUrls: ['./log-in.component.css'],
  templateUrl: './log-in.component.html',
})
export class LoginComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private router: Router) {
  }
  OnInit() {
  };
  onClick() {

  }

  redirecToLoginPage() {
    this.router.navigate(['login']);
  };

  }
