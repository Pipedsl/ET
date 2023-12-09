import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-profile-docente',
  templateUrl: './profile-docente.component.html',
  styleUrls: ['./profile-docente.component.scss'],
})
export class ProfileDocenteComponent  implements OnInit {
  codigoQr:any;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {}

  public generarQR(){
    this.codigoQr = 'https://github.com/Pipedsl/ET.git';
  }

  public async escanearQr() {
    const imagenWebPath = await this.photoService.abrirCamara();

    if (imagenWebPath) {
      this.codigoQr = imagenWebPath;
    }
  }
}
