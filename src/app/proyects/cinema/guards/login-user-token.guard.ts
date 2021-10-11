import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../auth/services/user.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginUserTokenGuard implements CanActivate, CanLoad {
  constructor( private userSvc: UserService,
    private router: Router){
      
    }
  isValid: boolean = false; 

  canActivate(): Observable<boolean> | boolean {
    
    return this.userSvc.validateToken()
      .pipe(
        tap( valid =>{

          if(valid){
            this.router.navigateByUrl('/proyects/cinema/');
          }
        }),
        map(valid => !valid)
        )

  }
  canLoad(): Observable<boolean> | boolean {

    return this.userSvc.validateToken()
      .pipe(
        tap( valid =>{

          if(valid){
            this.router.navigateByUrl('/proyects/cinema/');
          }
        }),
        map(valid => !valid)
        )
        
  }
}
