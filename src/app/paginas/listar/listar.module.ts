import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPageRoutingModule } from './listar-routing.module';

import { ListarPage } from './listar.page';
import { ProductosService } from 'src/app/servicios/productos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListarPage],
  providers:[ ProductosService]
})
export class ListarPageModule {}
