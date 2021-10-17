import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { CrudCar } from '../interfaces/interfaces';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getCars(){

    const url = `${this.baseUrl}/cars`;

    return this.http.get<CrudCar>(url)
      .pipe(
        tap( resp =>{

        })
      )
  }

  getCarsUser(id_user:number){

    const url = `${this.baseUrl}/cars/user/${id_user}`;

    return this.http.get<CrudCar>(url)
      .pipe(
        tap( resp =>{

        })
      )
  }

  getCar(id:number){

    const url = `${this.baseUrl}/cars/${id}`;

    return this.http.get<CrudCar>(url)
      .pipe(
        tap( resp =>{

        }),
        map( resp => resp ),
        catchError( err => of(err.error.msg))
      )
  }

  postCar(seat:string, id_movie_show:number, id_user:number){

    const url = `${this.baseUrl}/cars`;
    const body = { seat, id_movie_show, id_user };
    

    return this.http.post<CrudCar>(url, body)
      .pipe(
        tap( resp =>{

        }),
        map(resp => resp),
        catchError( err => of(err.error.msg))
      )
  }

  putCar(id:number, seat:string, id_movie_show:number){

    const url = `${this.baseUrl}/cars/${id}`;
    const body = { seat, id_movie_show };

    return this.http.post<CrudCar>(url, body)
      .pipe(
        tap( resp =>{

        }),
        map(resp => resp),
        catchError( err => of(err.error.msg))
      )
  }

  deleteCar(id:number){

    const url = `${this.baseUrl}/cars/${id}`;

    return this.http.delete<CrudCar>(url)
      .pipe(
        tap( resp =>{

        }),
        map(resp => resp),
        catchError( err => of(err.error.msg))
      )
  }


}
