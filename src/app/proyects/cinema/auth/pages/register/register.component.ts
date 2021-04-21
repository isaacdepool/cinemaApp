import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    date_birth: ['', [Validators.required, Validators.pattern(this.validatorsSvc.date_birth)]],
    phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    direction: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.validatorsSvc.password)]],
    confPass: ['', Validators.required],
    accept: [false, Validators.requiredTrue ]
  },
  {
    validators: [this.validatorsSvc.equealCamps('password', 'confPass')]
  });

  password = {
    typePassword: 'password',
    icon: 'pi pi-eye-slash'
  }

  constructor( private fb: FormBuilder,
               private validatorsSvc: ValidatorsService,
               private userSvc: UserService ) { }

  ngOnInit(): void {
  }

  isValidControl(value:string){

    return this.myForm.get(value)?.invalid
           && this.myForm.get(value)?.touched
  }

  register(){
    
    console.log(this.myForm);
    
    const { name, last_name, date_birth, email, password, direction, phone} = this.myForm.value;

    this.userSvc.postUser(name, last_name, date_birth, email, password, direction, phone)
          .subscribe( resp => {
            console.log(resp);
            
          });

    this.myForm.markAllAsTouched();
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
