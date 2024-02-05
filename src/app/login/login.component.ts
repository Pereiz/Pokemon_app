import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message : string = 'You are logged out (popi/popoza) ';
  name : string;
  password : string;
  auth : AuthService;

  constructor(
    private authService : AuthService,
    private router : Router) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage (){
    if (this.auth.isLoggedIn) {
      this.message = "vous êtes connecté";
    } else {
      this.message = 'Indentifiant ou mot de passe incorrect§'
    }

  }

  login(){
    this.message = 'tentative de connexion en cours ...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn : boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.router.navigate(['/pokemons']);
          
        }
      });
  }
  logout(){
    this.auth.logOut();
    this.message = 'Vous êtes déconnecté'
  }
}
