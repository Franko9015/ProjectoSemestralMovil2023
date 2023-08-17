import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('logoutButton', { static: true }) logoutButton!: ElementRef;

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta de Prueba',
      message: 'Esta es una alerta de prueba para demostrar que funciona.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async cerrarSesion() {
    if (this.logoutButton) {
      const logoutAnimation = this.animationCtrl.create()
        .addElement(this.logoutButton.nativeElement)
        .duration(1000) // Duración de la animación en ms
        .keyframes([
          { offset: 0, opacity: '1', transform: 'scale(1)' },
          { offset: 1, opacity: '0', transform: 'scale(0)' }
        ]);
  
      await this.playAnimation(logoutAnimation); // Reproducir la animación
    }
  
    // Redirigir a la página de bienvenida después de que termine la animación
    setTimeout(() => {
      this.navCtrl.navigateRoot('/bienvenida');
    }, 1000); // Esperar 1 segundo antes de redirigir
  }
  
  async playAnimation(animation: Animation) {
    return new Promise<void>((resolve) => {
      animation.onFinish(() => {
        resolve();
      });
      animation.play();
    });
  
  }

  irANotasEscolares() {
    this.navCtrl.navigateForward('/test1');
  }

  irAMallaCurricular() {
    this.navCtrl.navigateForward('/malla-curricular');
  }

}
