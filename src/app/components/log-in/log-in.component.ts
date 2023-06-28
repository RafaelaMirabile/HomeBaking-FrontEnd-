import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInputs } from 'src/app/data-Types/data-types.module';
import { postLogin } from 'src/app/services/API/API';


@Component({
  selector: 'app-login',
  styleUrls: ['./log-in.component.css'],
  templateUrl: './log-in.component.html',
})
export class LoginComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
  userEmail: string | undefined;
  passwd: string | undefined;
  constructor(private router: Router) {
  }
  OnInit() {
  };

  redirecToFundsPage() {
    this.router.navigate(['funds']);
  };

  loginRequest() {
    const body: LoginInputs = {
      userEmail: this.userEmail || '',
      passwd: this.passwd || '',
    };

    postLogin(body)
      .then((res) => {
        this.redirecToFundsPage();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
