import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieData!: Movie;

  constructor( private activateRoute: ActivatedRoute,
               private movieSvc: MovieService,
               private router: Router) { }

  ngOnInit(): void {
    
    this.activateRoute.paramMap.subscribe( resp =>{
      const id = resp.get('id') || '';
      
      if(Number(id) > 0){
        this.getMovie( Number(id) );
      }
    });

  }

  getMovie(id:number){

    this.movieSvc.getMovie(id).subscribe( resp => {
      
      if(resp.ok){
        this.movieData = resp.movieData;

      }else{
        this.router.navigateByUrl('/admin/movies');
      }
    });
  }

  

}
