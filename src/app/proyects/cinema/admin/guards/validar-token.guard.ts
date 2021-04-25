import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../auth/services/admin.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor( private adminSvc: AdminService,
               private router: Router){

  }

  canActivate(): Observable<boolean> | boolean {
    
    return this.adminSvc.validateTokenAdmin()
      .pipe(
        tap( valid =>{

          if(!valid){
            this.router.navigateByUrl('/proyects/cinema/admin/auth');
          }
        })
      )
  }
  canLoad(): Observable<boolean> | boolean {

    return this.adminSvc.validateTokenAdmin()
    .pipe(
      tap( valid =>{

        if(!valid){
          this.router.navigateByUrl('/proyects/cinema/admin/auth');
        }
      })
    )
  }
}
