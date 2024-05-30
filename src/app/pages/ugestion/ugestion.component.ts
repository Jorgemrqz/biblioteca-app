import { Component } from '@angular/core';
import { Usuario } from '../../domain/Usuario';
import { FormsModule } from '@angular/forms';
import { FireStoreService } from '../../services/fire-store.service';

@Component({
  selector: 'app-ugestion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ugestion.component.html',
  styleUrl: './ugestion.component.scss'
})
export class UgestionComponent {

  usuario: Usuario = new Usuario()
  usuarios: any

  constructor(private fireStoreService: FireStoreService){}

  ngOnInit() {
    this.fireStoreService.obtenerUsuarios().then(data=> {
      this.usuarios = data.docs.map((doc:any)=>{
        return{
          id: doc.id,
          ... doc.data()        
        }
      });
     
    }
    );
    }

    guardar(){
      this.fireStoreService.registrarUsuario(this.usuario)
    }

    borrar(id: string) {
      this.fireStoreService.borrarUsuarios(id).then(() => {
      }).catch(error => {
      });
      this.ngOnInit()
    }
}
