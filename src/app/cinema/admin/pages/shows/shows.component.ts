import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../../services/show.service';
import { Show } from '../../../interfaces/interfaces';
import { MovieService } from '../../../services/movie.service';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows!: Show[];
  movies: any[] = [];
  rooms: any[] = [];

  constructor( private showSvc: ShowService,
               private movieSvc: MovieService,
               private roomSvc: RoomService) { }

  ngOnInit(): void {

    
    this.showSvc.getShows()
    .subscribe( resp => {
      
      this.shows = resp.movieShows || [];
      
      
      if(this.shows.length > 0){
        
        
        for(let item of this.shows ){
          this.movieSvc.getMovie(1)
                  .subscribe().unsubscribe();
          this.roomSvc.getRoom(1)
                  .subscribe().unsubscribe();

          this.movies = [];
          this.rooms = [];
            
            this.movieSvc.getMovie(item.id_movie)
              .subscribe( resp => {
              this.movies.push(resp.movieData.name);
              });

            this.roomSvc.getRoom(item.id_room)
              .subscribe(resp => {
                this.rooms.push(resp.name);
                
                });
          }
        }
      }).add();
      
  }
 
}
