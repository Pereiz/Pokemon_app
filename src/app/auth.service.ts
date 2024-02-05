import { delay, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn : boolean = false;
  redirectUrl : string;

  login(name : string, password : string): Observable<boolean>{
    const isLoggedIn = (name == 'pipo' && password == 'popoza')
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logOut(){
    this.isLoggedIn = false;
  }
}
