import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  higherOrEqual( camp:string, camp2:string){

    return ( formgroup: AbstractControl): ValidationErrors | null =>{

      const rows = formgroup.get(camp)?.value;
      const seats = formgroup.get(camp2)?.value;
       
      if(rows > seats){
        formgroup.get(camp2)?.setErrors({noHigherOrEqual: true})
       return{ noHigherOrEqual: true }
      }     
      
      formgroup.get(camp2)?.setErrors(null);
      return null;
    }
    
  }

  higherTo( ctr: FormControl ): ValidationErrors | null {
  
    const value = Number(ctr.value);
    
    if(value <= 0){
      return {
        err: 'There can be no fields with numbers less than 0.'
      } 
    }

    return null;
    
  }
}
