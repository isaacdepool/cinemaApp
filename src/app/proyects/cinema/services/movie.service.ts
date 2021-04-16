import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudMovie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = environment.baseUrl;

  constructor( private httpClient: HttpClient ) { }

  getMovies(): Observable<CrudMovie>{
    return this.httpClient.get<CrudMovie>(`${this.baseUrl}/movies`);
  }

  getMovie( id:number ): Observable<CrudMovie>{
    return this.httpClient.get<CrudMovie>(`${this.baseUrl}/movies/${id}`);
  }

} 
