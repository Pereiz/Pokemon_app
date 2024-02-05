import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', redirectTo : 'pokemons', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'oups', component : PageNotFoundComponent},
  {path : '**', redirectTo: 'oups' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
