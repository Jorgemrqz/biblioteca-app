import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'login', title: 'Iniciar Sesion', component: LoginComponent},
    {path: 'inicio', title: 'Inicio', component: InicioComponent},
    {path: 'login/register', title: 'Registro', component: RegisterComponent}
];
