import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerUserInputs } from 'src/app/data-Types/data-types.module';
import { postRegistration } from 'src/app/services/API/API';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private router: Router) {
  }
  ngOnInit() {
  };
  onClick() {

  }

  redirecToLoginPage() {
    this.router.navigate(['login']);
  };

  registerRequest(data: Required<registerUserInputs>) {
    const body = {
      userName: data.userName,
      userEmail: data.userEmail,
      passwd: data.passwd
    }
    postRegistration(body).then(() => {
      this.redirecToLoginPage;
    }).catch()


  }
}

