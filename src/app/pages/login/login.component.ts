import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireStoreService } from '../../services/fire-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: any
  user: any
  password: any

  constructor(private fireStoreService: FireStoreService) { }

  ngOnInit(): void {
    this.fireStoreService.obtenerUsuarios().then (data => {
      this.users = data.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    })
    
  }

  verificarUsuario() {
    this.users.map((value: any) => {
      
    })
  }


}
