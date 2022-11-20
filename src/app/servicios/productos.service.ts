import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ProductoConID, Productos } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url_Productos = 'https://dummyjson.com/auth/products?skip=0 ';
  private comLista = new BehaviorSubject<Array<ProductoConID>>([]);
  public listaProductos$ = this.comLista.asObservable();
  private paginaActual = 1;

  constructor(private cliente: HttpClient) { }

  getProductos(){
    return this.url_Productos;
  }

  public listarPrimerosProductos(){
    this.cliente.get<Array<ProductoConID>>(`${this.url_Productos}?_page=1`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comLista.next(datos);
    });
  }

  public obtenerMasProductos(){
    this.cliente.get<Array<ProductoConID>>(`${this.url_Productos}?_page=${this.paginaActual}`)
    .pipe(
      delay(3000)
    )
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comLista.next(this.comLista.getValue().concat(datos));
      }

    })
  }

  public obtenerProductoPorId(id: number): Observable<ProductoConID | null>{
    return this.cliente.get<ProductoConID | null>(`${this.url_Productos}/${id}`)
  }


}
