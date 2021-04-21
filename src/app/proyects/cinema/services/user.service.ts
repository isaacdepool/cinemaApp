import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CrudUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  postUser( name:string, last_name:string, date_birth:string, email:string, password:string, direction:string, phone:string ):Observable<CrudUser>{

    const url = `${this.baseUrl}/user`;
    const body = {name, last_name, date_birth, email, password, direction, phone};

    return this.http.post<CrudUser>(url, body);
  }


}
