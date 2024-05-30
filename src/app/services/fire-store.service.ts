import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: Firestore) { }

  registrarUsuario(usuario: Usuario) {
    addDoc(collection(this.fireStore, 'usuarios'), Object.assign({}, usuario))
  }

  obtenerUsuarios() {
    return getDocs(query(collection(this.fireStore, 'usuarios')))
  }
}
