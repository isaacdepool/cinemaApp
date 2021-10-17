import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorsSvc.email)]],
    password: ['', [Validators.required]]
  });

  password = {
    typePassword: 'password',
    icon: 'pi pi-eye'
  }

  err = {
    isErr: false,
    msg: ''
  }

  constructor( private userSvc: UserService,
               private fb: FormBuilder,
               private validatorsSvc: ValidatorsService,
               private router: Router) { }
 
  ngOnInit(): void {
  }

  login(){

    const { email, password } = this.myForm.value;

    this.userSvc.login(email, password).subscribe( ok =>{

      if(ok===true){
        this.router.navigateByUrl('/home')
          .then( _ => window.location.reload());

      }else{
        this.err = {
          isErr: true,
          msg: ok
        }
      }
    })
  }

  isValidControl(value:string){

    return this.myForm.get(value)?.invalid
           && this.myForm.get(value)?.touched
  }

  eye(){

    if(this.password.typePassword === 'password'){

      this.password.typePassword = 'text';
      this.password.icon = 'pi pi-eye-slash';

    }else{ 
      this.password.typePassword = 'password';
      this.password.icon = 'pi pi-eye';
    }
  }

}
