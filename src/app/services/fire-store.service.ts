import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, query } from '@angular/fire/firestore';
import { Usuario } from '../domain/Usuario';
import { Libro } from '../domain/libro';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: Firestore) { }

  registrarUsuario(usuario: Usuario) {
    addDoc(collection(this.fireStore, 'usuarios'), Object.assign({}, usuario));
  }

  obtenerUsuarios() {
    return getDocs(query(collection(this.fireStore, 'usuarios')));
  }

  obtenerUsuario(id: string) {
    return getDoc(doc(this.fireStore, 'usuarios', id))
  }

  borrarUsuarios(usuarioId: string) {
    return deleteDoc(doc(this.fireStore, 'usuarios', usuarioId));
  }

  guardarLibro(libro: Libro) {
    addDoc(collection(this.fireStore, 'libros'), Object.assign({}, libro));
  }

  obtenerLibros() {
    return getDocs(query(collection(this.fireStore, 'libros')));
  }

  borrarLibro(id: string) {
    return deleteDoc(doc(this.fireStore, 'libros', id));
  }
}
