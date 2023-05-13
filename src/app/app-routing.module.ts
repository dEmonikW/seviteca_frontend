import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Ruta inicial redirige a /signup
  { path: 'signup', component: SignupComponent }, // Ruta para la página de registro
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
