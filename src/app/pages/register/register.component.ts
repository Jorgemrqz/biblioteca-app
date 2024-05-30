import { Component } from '@angular/core';
import { FireStoreService } from '../../services/fire-store.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../domain/Usuario';
import { RouterLink } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  usuario?: Usuario
  name: string;
  userName: string;
  mail: string;
  rol: string;
  password: string;
  passwordC: string;
  currentRol: string;

  constructor(private fireStoreService: FireStoreService, private comunicacionService: ComunicacionService) {
    this.name = '';
    this.mail = '';
    this.userName = '';
    this.password = '';
    this.passwordC = '';
    this.rol = '';
    this.currentRol = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comunicacionService.suscribe().subscribe(data => {
      this.currentRol = data;
    });
  }

  registrar() {
    this.usuario = new Usuario;
    this.usuario.name = this.name;
    this.usuario.userName = this.userName;
    this.usuario.mail = this.mail;
    this.usuario.password = this.password;
    this.usuario.rol = this.rol;
    if (this.password === this.passwordC && this.usuario.name != '' && this.usuario.userName != '' && this.usuario.mail != '' && this.usuario.rol != '') {
      this.fireStoreService.registrarUsuario(this.usuario);
      alert('Usuario creado correctamente');
      this.usuario = undefined;
      this.name = '';
      this.mail = '';
      this.userName = '';
      this.password = '';
      this.passwordC = '';
      this.rol = '';
    } else {
      alert('Error al crear el usuario verifique que los campos han sido llenados correctamente');
    }
  }
}
