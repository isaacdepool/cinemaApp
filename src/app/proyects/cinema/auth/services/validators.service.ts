import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public date_birth: string = "[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])";
  public password: string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  public email: string = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  constructor() { }


  equealCamps(camp:string, camp2:string){
    
    return ( formgroup: AbstractControl): ValidationErrors | null =>{

     const pass1 = formgroup.get(camp)?.value;
     const pass2 = formgroup.get(camp2)?.value;

     if(pass1 !== pass2) {
       formgroup.get(camp2)?.setErrors({noEqual: true})
       return{ noEqual: true }
     }      
     
     formgroup.get(camp2)?.setErrors(null);
     return null;
   }
 }
}
