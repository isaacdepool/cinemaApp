import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  movies: Movie[] = []; 

  constructor( private movieSvc: MovieService ) {

   }

  ngOnInit(): void {

    this.movieSvc.getMovies().subscribe( resp => {
      
      this.getNowPlaying(resp.moviesData || []);

    });    
  }

  getNowPlaying( movies: Movie[] ){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'NOW-PLAYING'){
          this.movies.push(movie);
       }
      }

    }
  }

}
