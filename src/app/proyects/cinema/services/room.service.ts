import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room, CrudRoom } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
 
  private baseUrl = environment.baseUrl;


  constructor( private http: HttpClient) { }

  getRooms(){

    const url = `${this.baseUrl}/rooms`;

    return this.http.get<CrudRoom>(url)
      .pipe(
        tap( resp =>{

        }),

      )

  }

  getRoom(id:number){

    const url = `${this.baseUrl}/rooms/${id}`;

    return this.http.get<CrudRoom>(url)
      .pipe(
        map( resp => resp.roomData),
        catchError( err => of(err.error.msg))
      )

  }
  
  saveRoom(name: string, rows:number, seats:number){

    const url = `${this.baseUrl}/rooms`;
    const body = { name, rows, seats };

    return this.http.post<CrudRoom>(url, body)
      .pipe(
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      )
  }

  updateRoom(id: number, name: string, rows:number, seats:number){

    const url = `${this.baseUrl}/rooms/${id}`;
    const body = { name, rows, seats };

    return this.http.put<CrudRoom>(url, body)
      .pipe(
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      )
  }

  deleteRoom(id: number){

    const url =`${this.baseUrl}/rooms/${id}`;
    
    return this.http.delete<CrudRoom>(url)
    .pipe(
      tap( resp =>{

      }),
      map( resp => resp.ok ),
      catchError( err => of(err.error.msg))
    )
  }
}
