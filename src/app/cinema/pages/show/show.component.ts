import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowService } from '../../services/show.service';
import { Show, Room, Movie } from '../../interfaces/interfaces';
import { MovieService } from '../../services/movie.service';
import { RoomService } from '../../services/room.service';
import { CarService } from '../../services/car.service';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id_show: string = '';
  showData!: Show;
  movieData!: Movie;
  roomData!: Room;

  column: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  seats: number[] = [];
  busy: string[] = [];
  selected: string[] = [];
  isPurchase: boolean = false;

  constructor( private activateRoute: ActivatedRoute,
               private showSvc: ShowService,
               private movieSvc: MovieService,
               private roomSvc: RoomService,
               private carSvc: CarService,
               private userSvc: UserService,
               private router: Router,) {

    this.activateRoute.paramMap.subscribe( resp =>{

      this.id_show = resp.get('id') || '';

      this.getShow(Number(this.id_show));
    });
      
   }

  ngOnInit(): void {
  }

  getShow(id:number){

    this.showSvc.getShow(id).subscribe( resp =>{

      this.showData = resp.movieShow;
      
      if(this.showData){

        this.getMovie(this.showData.id_movie);
        this.getRoom(this.showData.id_room);
        this.getCar();
      }

    });

  }

  getCar(){
    this.carSvc.getCars().subscribe( resp =>{

      for (const data of resp.carsData) {
        
        if(data.id_movie_show === Number(this.id_show)){
          this.busy.push(data.seat);
        }
      }
      
    })
  }

  getMovie(id:number){

    this.movieSvc.getMovie(id).subscribe( resp =>{
      this.movieData = resp.movieData;
    });
  }

  getRoom(id:number){

    this.roomSvc.getRoom(id).subscribe( resp => {
      this.roomData = resp;
      

      for( let i=0; i<this.roomData.seats; i++){
        this.seats.push(i+1);
      }
    });

  }

  onClick(resp:string){

    for (let i = 0; i < this.selected.length; i++) {
      
      if(resp===this.selected[i]){
        this.selected.splice(i,1);
        
        return false;
      }
    }

    this.selected.push(resp);

    for (let i = 0; i < this.busy.length; i++) {
      
      if(resp===this.busy[i]){
        this.selected.pop();
        return false;
      }
    }

    for (let i = 0; i < this.selected.length; i++) {
      
      if(resp===this.selected[i]){
        return true;
  
      }else return false;
    }
    
    return
    
  }

  isSelected(resp:string){
    
    for (let i = 0; i < this.selected.length; i++) {
            
      if(this.selected.includes(resp)){
        
        return true;
        
      }else{
        
        return false;
      } 
    }

    return false
 
  }

  isBusy(resp:string){
    
    for (let i = 0; i < this.busy.length; i++) {
            
      if(this.busy.includes(resp)){
        
        return true;
        
      }else{
        
        return false;
      } 
    }

    return false
 
  }

  car(){
    this.isPurchase = true;
    for (let i = 0; i < this.selected.length; i++) {
      
      this.carSvc.postCar( this.selected[i],
                           this.showData.id, 
                           Number(this.userSvc.User.id)).subscribe( resp =>{
          
        if(resp.ok){
          this.router.navigateByUrl('/home');
        }
      })
    }
      

  }

  buy(){

  }

}
