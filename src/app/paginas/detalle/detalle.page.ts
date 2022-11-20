import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoConID } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public idParametro: string = '';
  public productoActivo!: ProductoConID

  constructor(
    private estaRuta: ActivatedRoute,
    private apiProductos: ProductosService) { }

  ngOnInit() {
    this.estaRuta.params.subscribe(parametros => {
      this.idParametro = parametros.id;
      this.apiProductos.obtenerProductoPorId(+this.idParametro)
      .subscribe(producto =>{
        this.productoActivo! = producto;
      })
    })
  }

}
