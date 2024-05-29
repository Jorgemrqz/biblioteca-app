import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarUsersComponent } from './components/nav-bar-users/nav-bar-users.component';
import { NavBarAnyComponent } from './components/nav-bar-any/nav-bar-any.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,NavBarUsersComponent,NavBarAnyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'biblioteca';
  currentuser: any 
  role: any 
}
