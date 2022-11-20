import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      firstname:['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)] ],
      lastname: ['' , [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      age:['', [Validators.required] ],
      username: ['' , [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      contra:['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)] ],
      birthDate: ['' , [Validators.required,]],
      gender:['', [Validators.required] ],


    })
   }

  ngOnInit() {
  }

  public campo(control: string) {
    return this.formularioRegistro.get(control);
  }
  public fueTocado(control: string){
    return this.formularioRegistro.get(control).touched;
  }
  public estaSucio(control: string){
    return this.formularioRegistro.get(control).dirty;
  }
  async registrarse(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Faltan Datos, Por favor llenar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

  }

}
