import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/interfaces';
import { Movies } from '../../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor( private userSvc: UserService,
               private movieSvc: MovieService,
               private router: Router) { }

  ngOnInit(): void {

    this.movieSvc.getMovies().subscribe( resp =>{

      this.getNow(resp.moviesData || [])
    })
    
  }

  getNow(movies:Movie[]){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'NOW-PLAYING'){
          this.movies.push(movie);
       }
      }

    }
  }

  redirecTo( movie: Movie ){
    
    this.router.navigate(['movie', movie.name]);
  }

}
