import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  rol: string;
  userName: string;
  oValue: BehaviorSubject<string>;
  uValue: BehaviorSubject<string>;

  constructor() {
    this.rol= '';
    this.userName= '';
    this.oValue = new BehaviorSubject<string>(this.rol);
    this.uValue = new BehaviorSubject<string>(this.userName);
  }

  setValue(value: string) {
    this.rol = value;
    this.oValue.next(this.rol);
  }

  suscribe() {
    return this.oValue.asObservable();
  }

  setUValue(uvalue: string) {
    this.userName = uvalue;
    this.uValue.next(this.userName)
  }

  uSuscribe() {
    return this.uValue.asObservable()
  }
}
