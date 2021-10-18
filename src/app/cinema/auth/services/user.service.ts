import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import { CrudUser, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  constructor( private http: HttpClient) { }

  get User(){
    return {...this._user};
  }

  login( email:string, password: string){

    const url = `${this.baseUrl}/user/auth/login`;
    const body = {email, password};

    return this.http.post<CrudUser>(url, body)
      .pipe(
        tap( resp => {

          if( resp.ok ){
            this.saveUser(resp);
            
          }
        }),
        map( valid => valid ),
        catchError( err => of(err.error.msg))
      )
  }

  logout(){

    localStorage.clear();
  }

  getUser(id:string){

    const url = `${this.baseUrl}/user/${id}`;
    
    return this.http.get<CrudUser>(url);
  }

  postUser( name:string, last_name:string, date_birth:string, email:string, password:string, direction:string, phone:string ){

    const url = `${this.baseUrl}/user`;
    const body = {name, last_name, date_birth, email, password, direction, phone};

    return this.http.post<CrudUser>(url, body)
      .pipe(
        tap( resp => {
          
          if( resp.ok ){
            this.saveUser(resp);
          }
        }),
        map( valid => valid.ok ),
        catchError( err => of(err.error.msg))
      )
  }

  validateToken():Observable<boolean>{

    const url = `${this.baseUrl}/user/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');


      return this.http.get<CrudUser>(url, {headers})
        .pipe(
          map( resp => {
            if( resp.ok ){
              this.saveUser( resp );
              
            }

            return resp.ok;
          }),
          catchError( err => of(false))
        )

  }

  saveUser( resp: CrudUser ){

    localStorage.setItem('token', resp.token! );    
        
      this._user = {
        id: resp.id!,
        name: resp.name!,
        email: resp.email!
      }    
  }
}
