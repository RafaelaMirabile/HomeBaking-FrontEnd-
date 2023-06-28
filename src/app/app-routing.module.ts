import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { FundsComponent } from './components/funds/funds.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: RegisterComponent },
  {path:'funds', component: FundsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
