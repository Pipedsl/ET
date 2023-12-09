import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../../../../services/photo.service';

@Component({
  selector: 'app-profile-estudiante',
  templateUrl: './profile-estudiante.component.html',
  styleUrls: ['./profile-estudiante.component.scss'],
})
export class ProfileEstudianteComponent  implements OnInit {

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {}

  tomarFotoyLeerQr() {
    this.photoService.agregarFoto();
  }

}
