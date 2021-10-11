import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginUserTokenGuard } from '../guards/login-user-token.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login', component: LoginComponent,
        canActivate: [LoginUserTokenGuard],
        canLoad: [LoginUserTokenGuard],
      },
      {
        path: 'register', component: RegisterComponent,
        canActivate: [LoginUserTokenGuard],
        canLoad: [LoginUserTokenGuard],
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
