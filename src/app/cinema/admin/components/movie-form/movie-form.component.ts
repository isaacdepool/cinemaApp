import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../../../interfaces/interfaces';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit{

  @Input() movieData!: Movie;
  isEdit: boolean = false;
  isSave: boolean = false;
  rate: string[] = ['G', 'PG', 'PG-13', 'R', '+18'];
  role: string[] = ['NOW-PLAYING', 'PREMIERE', 'COMING-SOON'];

  myForm: FormGroup = this.fb.group({
    name: [, Validators.required],
    synopsis: [, Validators.required],
    premiere: [, Validators.required],
    vertical_poster: [, Validators.required],
    horizontal_poster: [, Validators.required],
    actors: [, Validators.required],
    directors: [, Validators.required],
    duration: [, [Validators.required,  Validators.min(1)] ],
    genre: [, Validators.required],
    role: [, Validators.required],
    rating: [, Validators.required]
  });

  get rating(){
    return this.myForm.get('rating');
  }

  get roles(){
    return this.myForm.get('role');
  }

  rat(e:any){
    
    this.rating?.setValue( e.target.value, {
      onlySelf: true
    });
  }

  rol(e:any){
    
    this.roles?.setValue( e.target.value, {
      onlySelf: true
    });
  }

  constructor( private fb: FormBuilder,
               private movieSvc: MovieService,
               private router: Router,
               private validatorsSvc: ValidatorsService) {

    }

  ngOnInit(): void { 

    if(this.movieData){
      this.formData(this.movieData);
      this.edit(this.isEdit);
    }
  }

  isValid(control:string){

    return this.myForm.controls[control].invalid
           && this.myForm.controls[control].touched
  }

  edit( isEdit:boolean ){ 
        
    if(!isEdit){

      this.myForm.disable();
      this.formData(this.movieData);
      this.isEdit = false;

    }else{
      this.isEdit = true;
      this.myForm.enable();
    }  
    
  }

  getMovie(id:number){

    this.movieSvc.getMovie(id).subscribe( resp => {
      
      if(resp.ok){
        this.movieData = resp.movieData;
        this.formData(resp.movieData);

      }else{
        this.router.navigateByUrl('/admin/movies');
      }
    });
  }

  save(){
        
    if(this.movieData){
      this.movieSvc.updateMovie(this.movieData.id, this.myForm.value)
        .subscribe( ok =>{
  
          if(ok){
            this.save != this.save;
            this.getMovie(this.movieData.id);
            alert('The data has been updated!');
            location.reload();
          }
        });

    }else{
      
      this.movieSvc.saveMovie(this.myForm.value)
        .subscribe( resp =>{
          alert('The Movie has been created!');
          this.router.navigateByUrl('/admin/movies');
        })
    }
  }

  delete(){

    this.movieSvc.deleteMovie( this.movieData.id )
      .subscribe( ok => {

        if(ok){

          this.router.navigateByUrl('/admin/movies')
            .then( _ => alert('Movie has been delete!'));

        }else{
          alert(ok.msg);
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
      rating: data.rating,
      genre: data.genre,
      role: data.role
    });
    
  }

}
