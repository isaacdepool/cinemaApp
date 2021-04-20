import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = {
    typePassword: 'password',
    icon: 'pi pi-eye-slash'
  }

  constructor() { }

  ngOnInit(): void {
  }

  eye(){

    if(this.password.typePassword === 'password'){

      this.password.typePassword = 'text';
      this.password.icon = 'pi pi-eye';

    }else{ 
      this.password.typePassword = 'password';
      this.password.icon = 'pi pi-eye-slash';
    }
  }

}
