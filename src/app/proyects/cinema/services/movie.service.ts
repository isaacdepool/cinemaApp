import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudMovie } from '../interfaces/interfaces';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = environment.baseUrl;

  constructor( private httpClient: HttpClient ) { }

  getMovies(): Observable<CrudMovie>{
    return this.httpClient.get<CrudMovie>(`${this.baseUrl}/movies`);
  }

  getMovie( id:number ){

    const url = `${this.baseUrl}/movies/${id}`;

    return this.httpClient.get<CrudMovie>(url)
      .pipe(
        tap( resp =>{


        }),
        map( resp => resp ),
        catchError(err => of(err.error.msg))
      )
  }

  saveMovie(body:any){

    const url = `${this.baseUrl}/movies`;

    return this.httpClient.post<CrudMovie>(url, body)
      .pipe(
        tap( resp =>{
          console.log(resp);
          
        })
      )
  }

  updateMovie(id:number, body:any){

    const url = `${this.baseUrl}/movies/${id}`;

    return this.httpClient.put<CrudMovie>(url, body)
      .pipe(
        tap( resp => {

        }),
        map( ok => ok.ok),
        catchError( err => err.error.msg)
      )
  }

  deleteMovie(id:number){

    const url = `${this.baseUrl}/movies/${id}`; 

    return this.httpClient.delete<CrudMovie>(url)
      .pipe(
        tap( resp =>{

        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )
  }

} 
