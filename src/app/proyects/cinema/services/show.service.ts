import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudShow, Room, Show } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private baseUrl = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getShows(){

    const url = `${this.baseUrl}/movie-shows`

    return this.http.get<CrudShow>(url)
    .pipe(
      tap( resp =>{

      }),
    )
  }

  getShow(id:number){

    const url = `${this.baseUrl}/movie-shows/${id}`;

    return this.http.get<CrudShow>(url)
      .pipe(
        map( resp => resp ),
        catchError( err => of(err.error.msg))
      )
  }

  saveShow(price:number, start_time: string, end_time: string, day: string, id_room: number, id_movie: number){

    const url = `${this.baseUrl}/movie-shows`;
    const body = {price, start_time, end_time, day, id_room, id_movie}

    return this.http.post<CrudShow>(url, body)
      .pipe(
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )
  }

  updateShow(id:number, price:number, start_time: string, end_time: string, day: string, id_room: number, id_movie: number){

    const url = `${this.baseUrl}/movie-shows${id}`;
    const body = {price, start_time, end_time, day, id_room, id_movie}

    return this.http.put<CrudShow>(url, body)
      .pipe( 
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )
  }

  deleteShow(id:number){

    const url = `${this.baseUrl}/movie-shows/${id}`;

    return this.http.delete<CrudShow>(url)
      .pipe( 
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )
  }
}
