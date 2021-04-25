import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/interfaces';
import { FilterService } from '../../../services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesData: Movie[] = [];
  term: string = '';

  constructor( private movieSvc: MovieService,
               private filterSvc: FilterService,
               private router: Router) {
    
   }

  ngOnInit(): void {

    this.movieSvc.getMovies().subscribe( resp => {
      this.moviesData = resp.moviesData || [];
    });
    
  }

  search(term:string){

    if(term.length <= 0){
      this.movieSvc.getMovies().subscribe( resp => {
        this.moviesData = resp.moviesData || [];
      });

    }else this.moviesData = this.filterSvc.filter(this.moviesData, term);
    
  }

  info( id: number ){

    this.router.navigate(['/proyects/cinema/admin/movie', id]);
  }

}
