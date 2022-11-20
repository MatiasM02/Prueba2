import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;

  constructor(public apiProductos: ProductosService) { }

  ngOnInit() {
  }
  ionViewWillEnter(): void{
    this.apiProductos.listarPrimerosProductos()
    this.apiProductos.listaProductos$.subscribe(datos =>{
      if(this.scroll){
        this.scroll.complete();
      }
    })
  }

  public cargarMasDatos(){
    this.apiProductos.obtenerMasProductos();
  }

}
