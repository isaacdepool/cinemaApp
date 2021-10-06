import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../services/room.service';
import { Room } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room!: Room;

  constructor( private ActivatedRoute: ActivatedRoute,
               private router: Router,
               private roomSvc: RoomService) {

              }
              
  ngOnInit(): void {

    this.ActivatedRoute.paramMap.subscribe( resp => {
      const id = resp.get('id') || '';
      
      if(Number(id) > 0){
        this.getRoom( Number(id) );
      }
    });
  }

  getRoom(id:number){
  
    this.roomSvc.getRoom(id).subscribe( resp =>{
      console.log(resp);
      
      if(resp.id){

        this.room = resp;

      }else{
        this.router.navigateByUrl('/proyects/cinema/admin/rooms');
      }
      
            
    });
  }
}
