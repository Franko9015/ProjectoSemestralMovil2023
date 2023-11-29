import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController, AnimationController, Animation } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {
  Barcode,
  BarcodeScanner,
  BarcodeFormat,
} from '@capacitor-mlkit/barcode-scanning';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('logoutButton', { static: true }) logoutButton!: ElementRef;
  username: string = '';
  public barcodes: Barcode[] = [];

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private route: ActivatedRoute,
    private toast: ToastController
    

  ) {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }


  public async scan(): Promise<void> {
    try {
      const { barcodes } = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode],
      });
      this.barcodes = barcodes;
    } catch (error) {
      const toast = await this.toast.create({
        message: '' + error,
        duration: 5000,
      });
      toast.present();
    } finally {
      setTimeout(() => {
        this.navCtrl.navigateForward('/presente');
      }, 5000); 
    }
  }
  
 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
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

  irAnotaciones() {
    this.navCtrl.navigateForward('/anotaciones');
  }

  irAhorariodeclase(){
   this.navCtrl.navigateForward('/horario');
  }

  iracomunicados(){
    this.navCtrl.navigateForward('/comunicados');
  }


}
