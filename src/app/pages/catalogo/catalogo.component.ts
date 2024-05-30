import { Component } from '@angular/core';
import { FireStoreService } from '../../services/fire-store.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  libros: any

  constructor(private fireStoreService: FireStoreService) { }

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
}
