import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      //console.log("La connexion est bien réalisée")
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
