import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  movies: Movie[] = [];

  constructor( private movieSvc: MovieService) { }

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe( resp => {
      
      this.getComingSoon(resp.moviesData || []);

    });
  }

  getComingSoon( movies: Movie[] ){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'COMING-SOON'){
          this.movies.push(movie);
       }
      }

    }
  }

}
