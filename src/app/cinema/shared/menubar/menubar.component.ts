import { Component, OnInit } from '@angular/core';
import { Menu, Room, Movie, Show, Car } from '../../interfaces/interfaces';
import { UserService } from '../../auth/services/user.service';
import { CarService } from '../../services/car.service';
import { ShowService } from '../../services/show.service';
import { RoomService } from '../../services/room.service';
import { MovieService } from '../../services/movie.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: Menu[] = [];
  isActiveUser: boolean = false;

  carData: Car[] = [];
  carData2: Car[] = [];
  gene: any[] = [];

  data = [{
    id: 0,
    seat: '',
    price: 0,
    day: '',
    hour: '',
    title: '',
    room: '',
    vertical_poster: ''
  }]



  popover: any = document.querySelector('#popover');
  tooltip: any = document.querySelector('#tooltip');
  
  constructor( private userSvc: UserService,
               private carSvc: CarService,
               private showSvc: ShowService,
               private roomSvc: RoomService,
               private movieSvc: MovieService ) { }

  ngOnInit(): void {
    this.MenuItems();

    this.userSvc.validateToken().subscribe( resp =>{
      this.isActiveUser = resp;
    });

     
    
  }

  MenuItems(){

    this.items = [
      {
        label: 'Home',
        redirecTo: 'home'
      },
      {
        label: 'Now playing',
        redirecTo: 'now-playing'
      },
      {
        label: 'Premieres',
        redirecTo: 'premieres'
      },
      {
        label: 'Coming Soon',
        redirecTo: 'coming-soon'
      }
    ]
  }

  clear(){
    
    this.data = [];
    this.carData = [];
    this.carData2 = [];

    this.carSvc.getCarsUser(0).subscribe( resp =>{}).unsubscribe();
    this.movieSvc.getMovie(0).subscribe( resp => {}).unsubscribe();
    this.showSvc.getShow(0).subscribe( resp =>{}).unsubscribe();
    this.roomSvc.getRoom(0).subscribe( resp =>{}).unsubscribe();
    
  }

  car(){
    
    this.carSvc.getCarsUser(Number(this.userSvc.User.id))
      .subscribe( resp =>{

        this.carData = resp.carsData;
        this.getshow(); 
        

      })
  }

  getPrice(data:any){

    let total = 0;

    if(data.length > 0){

      for (const dat of data) {
        if(dat){

          total += dat.price
        }
      }
      return total
    }
    return 0
  }

    getshow(){
  
      for (let i=0; i<this.carData.length; i++) {
        
        this.showSvc.getShow(this.carData[i].id_movie_show).pipe(
          switchMap( resp => {
            this.data[i] = {
              id: this.carData[i].id,
              seat: this.carData[i].seat,
              price: resp.movieShow.price,
              day: resp.movieShow.day,
              hour: resp.movieShow.start_time,
              title: '',
              room: '',
              vertical_poster: ''
            }
            this.h(resp, i);
            return this.movieSvc.getMovie(resp.movieShow.id_movie);
          })
        ).subscribe( resp3 =>{
          this.data[i].title = resp3.movieData.name;
          this.data[i].vertical_poster = resp3.movieData.vertical_poster;
        });
      }
      }

      h(resp:any, i:number){
        
        this.roomSvc.getRoom(resp.movieShow.id_room).subscribe( resp3 =>{
                  
          this.data[i].room = resp3.name;
          
        });
      }

  delete(id:number, i:number){

    this.carSvc.deleteCar(id).subscribe( resp => {
      if(resp.ok){
        this.data.splice(i, 1);
        
      }
    })
  }



  logout(){
    this.userSvc.logout();

    this.userSvc.validateToken().subscribe( resp =>{
      this.isActiveUser = resp;      
    });
  }

}
