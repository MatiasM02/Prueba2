import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegUsuarios } from '../modelos/reg-usuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url_Usuarios = 'https://dummyjson.com/auth/login';
  private url_RegUsuarios = 'https://dummyjson.com/users/add';

  constructor(private cliente: HttpClient) { }

  getUsuarios(){
    return this.url_Usuarios;
  }

  addUsuarios(regUsuarios: RegUsuarios){
    this.cliente.post(this.url_RegUsuarios, regUsuarios,{
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      }
    })

  }


}
