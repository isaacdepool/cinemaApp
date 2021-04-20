import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
