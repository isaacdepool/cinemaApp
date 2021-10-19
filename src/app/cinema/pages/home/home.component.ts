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

  moviesNow: Movie[] = [];
  moviesPremier: Movie[] = [];
  moviesSoon: Movie[] = [];

  constructor( private userSvc: UserService,
               private movieSvc: MovieService,
               private router: Router) { }

  ngOnInit(): void {

    this.movieSvc.getMovies().subscribe( resp =>{

      this.getNow(resp.moviesData || []);
      this.getPremiere(resp.moviesData || []);
      this.getSoon(resp.moviesData || []);
    })
    
  }

  getNow(movies:Movie[]){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'NOW-PLAYING'){
          this.moviesNow.push(movie);
       }
      }

    }
  }

  getPremiere(movies:Movie[]){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'PREMIERE'){
          this.moviesPremier.push(movie);
       }
      }

    }
  }

  getSoon(movies:Movie[]){

    if(movies.length > 0){
 
      for (const movie of movies) {

        if(movie.role === 'COMING-SOON'){
          this.moviesSoon.push(movie);
       }
      }

    }
  }

  redirecTo( movie: Movie ){
    
    this.router.navigate(['movie', movie.name]);
  }

}
