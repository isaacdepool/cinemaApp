import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.css']
})
export class PremieresComponent implements OnInit {

  movies: Movie[] = []; 

  constructor( private movieSvc: MovieService) { }

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe( resp => {
      
      this.getPremieres(resp.moviesData || []);

    });
  }

  getPremieres( movies: Movie[] ){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'PREMIERE'){
          this.movies.push(movie);
       }
      }

    }
  }

}
