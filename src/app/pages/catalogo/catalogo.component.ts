import { Component } from '@angular/core';
import { FireStoreService } from '../../services/fire-store.service';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  libros: any
  rol: string;

  constructor(private fireStoreService: FireStoreService, private comunicacionService: ComunicacionService) {
    this.rol = ''
    this.comunicacionService.suscribe().subscribe(data => {
      this.rol = data;
    })
  }

  ngOnInit(): void {
    this.fireStoreService.obtenerLibros().then(data => {
      this.libros = data.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    })
  }

  borrarlibro(id: string) {
    this.fireStoreService.borrarLibro(id);
    this.ngOnInit()
  }
}
