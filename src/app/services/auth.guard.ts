import { userStatusSelector } from './../user/_store/user.selectors';
import { StoreType } from './../../types';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<StoreType>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>  {
    return this.store.select(userStatusSelector).pipe(
      take(1), // take the 1st data
      tap( (status) => {
        if (!status) {
          this.router.navigate(['/login'])
        }
        return status;
      }) // execute some logic after receiving the data
      );
  }
  
}
