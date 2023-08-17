import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; // Importa NavController también

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, private navCtrl: NavController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta de Prueba',
      message: 'Esta es una alerta de prueba para demostrar que funciona.',
      buttons: ['OK']
    });

    await alert.present();
  }

  irANotasEscolares() {
    this.navCtrl.navigateForward('/test1');
  }
}




