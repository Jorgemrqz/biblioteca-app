import { Component } from '@angular/core';
import { FireStoreService } from '../../services/fire-store.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../domain/Usuario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  usuario?: Usuario
  name: any
  userName: any
  mail: any
  rol: any
  password: any
  passwordC: any
  currentRol: any

  constructor(private fireStoreService: FireStoreService) { }

  registrar() {
    this.usuario = new Usuario
    this.usuario.name = this.name
    this.usuario.userName = this.userName
    this.usuario.mail = this.mail
    this.usuario.password = this.password
    this.usuario.rol = this.rol
    if (this.password === this.passwordC && this.usuario.name != undefined && this.usuario.userName != undefined && this.usuario.mail != undefined && this.usuario.rol != undefined) {
      this.fireStoreService.registrarUsuario(this.usuario)
      alert('Usuario creado correctamente')
      this.usuario = undefined
      this.name = ''
      this.mail = ''
      this.userName = ''
      this.password = ''
      this.passwordC = ''
      this.rol = ''
    } else {
      alert('Error al crear el usuario verifique que los campos han sido llenados correctamente')
    }
  }
}
