import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { UgestionComponent } from './pages/ugestion/ugestion.component';

export const routes: Routes = [
    {path: 'login/register', title: 'Registro', component:RegisterComponent},
    {path: 'ugestion', title: 'Gestion Usuarios', component: UgestionComponent},
    {path: 'buscador', title: 'Agregar Libros', component:BuscadorComponent},
    {path: 'catalogo', title: 'Catalogo', component:CatalogoComponent},
    {path: 'register', title: 'Registro', component:RegisterComponent},
    {path: 'login', title: 'Iniciar Sesion', component:LoginComponent},
    {path: '' , component:InicioComponent}
];
