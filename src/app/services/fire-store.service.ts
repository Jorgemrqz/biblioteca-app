import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: Firestore) { }

  registrarUsuario(usuario: Usuario) {
    addDoc(collection(this.fireStore, 'usuarios'), Object.assign({}, usuario))
  }
}
