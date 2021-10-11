import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../auth/services/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor( private userSvc: UserService,
               private router: Router){

  }

  canActivate(): Observable<boolean> | boolean {
    
    return this.userSvc.validateToken()
      .pipe(
        tap( valid =>{

          if(!valid){
            this.router.navigateByUrl('/proyects/cinema/auth/login');
          }
        })
      )
  }
  canLoad(): Observable<boolean> | boolean {

    return this.userSvc.validateToken()
      .pipe(
        tap( valid =>{

          if(!valid){
            this.router.navigateByUrl('/proyects/cinema/auth/login');
          }
        })
      )
  }
}
