import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController, private router: Router) {

    this.formularioLogin = this.fb.group({

      user:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)] ],
      contraseña: ['' , [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = 'https://dummyjson.com/auth/login';

    if(usuario == f.user && usuario == f.contraseña){
      console.log('Ingresado');
      const alert2 = await this.alertController.create({
        header: 'Inicio de sesion',
        message: 'Inicio de sesion correctamente.',
        buttons: ['Aceptar']
      });this.router.navigate(['listar'])
      await alert2.present();
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Datos ingresados son incorrectos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
  }


  public campo(control: string) {
    return this.formularioLogin.get(control);
  }
  public fueTocado(control: string){
    return this.formularioLogin.get(control).touched;
  }
  public estaSucio(control: string){
    return this.formularioLogin.get(control).dirty;
  }


}
