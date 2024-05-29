import { Component } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  booksData: any;
  titulo: string = '';
  libros: any[] = []

  constructor(private booksService: BooksServiceService) { }

  ngOnInit(): void {

  }

  buscarPelicula() {
    this.libros = []
    this.booksService.obtenerPelicula(this.titulo).subscribe(data => {
      this.booksData = Object.assign({}, data)

      this.booksData.items.map((item: any) => {
        console.log(item.volumeInfo);
        this.libros.push(item.volumeInfo)
        console.log(`agregando ${item.volumeInfo.title}`);
      })
    })
    this.titulo = ''
  }

}
