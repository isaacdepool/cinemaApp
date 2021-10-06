import { Component, OnInit } from '@angular/core';
import { Room } from '../../../interfaces/interfaces';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = [];
  constructor( private roomSvc: RoomService ) { }

  ngOnInit(): void {

    this.roomSvc.getRooms().subscribe( resp =>{
         this.rooms = resp.roomsData;
         
      });
  }

}
