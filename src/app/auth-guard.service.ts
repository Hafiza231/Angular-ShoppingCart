import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private authService:AuthService) { }
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    if (!this.authService.isUserLoggedIn()) {
      alert('You are not allowed to view this page. You are redirected to login Page');
      
      this.router.navigate(["login"]);//,{ queryParams: { retUrl: route.url} });
      return false;
  } 

  return true;
  }
}
