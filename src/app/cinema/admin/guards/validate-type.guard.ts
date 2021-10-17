import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../auth/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTypeGuard implements CanActivate, CanLoad {
  
  constructor( private adminSvc: AdminService,
               private router: Router){

  }

  canActivate(): Observable<boolean> | boolean {
    
    const type = this.adminSvc.Admin.type;

    if(type!='SUPERADMIN'){
      this.router.navigateByUrl('/admin/');
      return false;

    }else return true;
  }

  canLoad(): Observable<boolean> | boolean {
    const type = this.adminSvc.Admin.type;

    if(type!='SUPERADMIN'){
      this.router.navigateByUrl('/admin/');
      return false;

    }else return true;
  }
}
