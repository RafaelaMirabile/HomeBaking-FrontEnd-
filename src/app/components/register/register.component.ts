import { Component } from '@angular/core';
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
  userEmail: string | undefined;
  passwd: string | undefined;
  userName:string | undefined

  constructor(private router: Router) { }

  redirectToLoginPage() {
    this.router.navigate(['login']);
  }

  registerRequest() {
    const body: registerUserInputs = {
      userEmail: this.userEmail || '',
      passwd: this.passwd || '',
      userName: this.userName || ''
    };

    postRegistration(body)
      .then((res) => {
        this.redirectToLoginPage();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
