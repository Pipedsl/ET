import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
} from '@capacitor/camera';
import { 
  QRScanner, 
  QRScannerStatus 
} from '@ionic-native/qr-scanner/ngx';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(
    private qrScanner : QRScanner
  ) {}

  public async agregarFoto (){
    try {
      // Tomar una foto
      const capturarFoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      })

      if (capturarFoto) {
        const photoPath = capturarFoto.webPath
        const resultadoQr = await this.leerCodigoQr(photoPath);
      }
    } catch (error){
      console.error('Error al tomar la foto: ', error)
    }
  }

  private async leerCodigoQr(imagePath: string): Promise<string> {
    try {
      const result: QRScannerStatus = await this.qrScanner.scanImage(imagePath);

      if (resultado && resultado.) {
        return result.result;
      } else {
        throw new Error('No se pudo leer el código QR.');
      }

    } catch (error) {
      console.error('Error al leer el código QR:', error);
      throw error;
    }
  }
}
