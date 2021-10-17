import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';
import { Room } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  @Input() room!: Room;

  myForm: FormGroup = this.fb.group({
    name: [, Validators.required],
    rows: [, [Validators.required, Validators.max(27), Validators.min(1), ] ],
    seats: [, [Validators.required, Validators.min(1)], ]
  },
  {
    validators: [this.validatorsSvc.higherOrEqual('rows', 'seats')]
  });

  err = {
    ok: false,
    msg: ''
  }

  constructor( private fb: FormBuilder,
               private validatorsSvc: ValidatorsService,
               private roomSvc: RoomService,
               private router: Router) { 

              }
              
  ngOnInit(): void {
    
    if(this.room){

      this.formData(this.room);
    }
  }

  isValid(control:string){

    return this.myForm.controls[control].invalid
           && this.myForm.controls[control].touched
  }

  save(){

    const { name, rows, seats } = this.myForm.value;

    if(!this.room){
      this.roomSvc.saveRoom(name, rows, seats)
        .subscribe( ok => {
  
        if(ok === true){
          alert('Room is create and saved');
          this.router.navigateByUrl('/admin/rooms');
  
        }else{
          this.myForm.reset();
          
          this.err = {
            ok: true,
            msg: ok
          }
        }
      });

    }else{

      this.roomSvc.updateRoom(this.room.id, name, rows, seats)
        .subscribe( ok => {
          
          if(ok){
            alert('Room is updated and saved');
            this.router.navigateByUrl('/admin/rooms');

          }else{
          this.formData(this.room);
          
          this.err = {
            ok: true,
            msg: ok
          }
          }
          
        })
    }
  } 

  delete(){

    this.roomSvc.deleteRoom(this.room.id)
      .subscribe( ok => {

        if(ok){

          alert('The Room has been deleted!')
          this.router.navigateByUrl('/admin/rooms');

        }else{
          console.log('err');
          
        }

        
      })
    
  }

  formData(data:Room){

    this.myForm.reset({
      name: data.name,
      rows: data.rows,
      seats: data.seats
    });
  }
  

}
