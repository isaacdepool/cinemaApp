import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudAdmin, Admin } from '../../interfaces/interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = environment.baseUrl;
  private _admin!: Admin;

  constructor( private http: HttpClient) { }

  get Admin(){
    return {...this._admin};
  }

  getAdmin( username:string, password:string){
    
    const url = `${this.baseUrl}/admin/auth/login`;
    const body = { username, password };

    return this.http.post<CrudAdmin>(url, body)
      .pipe(
        tap( resp => {
          
          this.saveAdmin(resp);
          
        }),
        map( valid => valid.ok ),
        catchError( err => of(err.error.msg))
      )
  }

  validateTokenAdmin():Observable<boolean>{

    const url = `${this.baseUrl}/admin/auth/renew`;
    const headers = new HttpHeaders()
      .set('admin-token', localStorage.getItem('tokenAdmin') || '');


      return this.http.get<CrudAdmin>(url, {headers})
        .pipe(
          map( resp => {
            if( resp.ok ){
              this.saveAdmin( resp );
              
            }

            return resp.ok;
          }),
          catchError( err => of(false))
        )

  }

  saveAdmin( resp: CrudAdmin ){

    localStorage.setItem('tokenAdmin', resp.token);

    this._admin = {
      id: resp.id!,
      username: resp.username!,
      type: resp.type!
    };  
     
  }
}
