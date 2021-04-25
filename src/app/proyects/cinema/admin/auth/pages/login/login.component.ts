import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  password = {
    typePassword: 'password',
    icon: 'pi pi-eye'
  }

  err = {
    isErr: false,
    msg: ''
  }

  constructor( private fb: FormBuilder,
               private adminSvc: AdminService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  login(){    
    
    const { username, password } = this.myForm.value;
    
    this.adminSvc.getAdmin( username, password )
      .subscribe( ok => {
        
        if(ok===true){
          this.router.navigateByUrl('/proyects/cinema/admin/');

        }else{
          this.err = {
            isErr: true,
            msg: ok
          }

          this.myForm.markAsPending();
        }
        
      })
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
