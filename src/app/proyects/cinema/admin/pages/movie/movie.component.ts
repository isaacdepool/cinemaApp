import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../auth/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    'name': [, Validators.required],
    'synopsis': [, Validators.required],
    'premiere': [, Validators.required],
    'vertical_poster': [, Validators.required],
    'horizontal_poster': [, Validators.required],
    'actors': [, Validators.required],
    'directors': [, Validators.required],
    'duration': [, Validators.required],
    'genre': [, Validators.required],
    'rating': [, Validators.required],
    'role': [, Validators.required],
  });

  movieData!: Movie;

  constructor( private activateRoute: ActivatedRoute,
               private movieSvc: MovieService,
               private router: Router,
               private fb: FormBuilder) { }

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
        this.formData(resp.movieData);

      }else{
        this.router.navigateByUrl('/proyects/cinema/admin/movies');
      }
    });
  }

  formData(data:Movie){

    this.myForm.reset({
      name: data.name,
      synopsis: data.synopsis,
      premiere: new Date(data.premiere),
      vertical_poster: data.vertical_poster,
      horizontal_poster: data.horizontal_poster,
      actors: data.actors,
      directors: data.directors,
      duration: data.duration,
      genre: data.genre,
      rating: data.rating,
      role: data.role
    });
  }

}
