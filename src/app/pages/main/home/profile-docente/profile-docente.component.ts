import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-profile-docente',
  templateUrl: './profile-docente.component.html',
  styleUrls: ['./profile-docente.component.scss'],
})
export class ProfileDocenteComponent  implements OnInit {
  codigoQr:any;
  resultadoScan: string = '';

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {}

  public generarQR(){
    this.codigoQr = 'https://github.com/Pipedsl/ET.git';
  }

  public async escanearQr() {
    const imagenWebPath = await this.photoService.abrirCamara();

    let linkCodigo: string = '';

    if (imagenWebPath) {
      linkCodigo = imagenWebPath;
    }

    this.resultadoScan = linkCodigo;
  }
}
