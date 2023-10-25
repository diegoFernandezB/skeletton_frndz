import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController, IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,MatDatepickerModule,MatInputModule],
})
export class CertificacionesComponent  implements OnInit {
  @ViewChild('inputnomcerti',{ read: ElementRef}) inputnomcerti: ElementRef;
  
  constructor() {
    this.inputnomcerti = ElementRef.prototype as any;
   }

  ngOnInit() {}
  cert={
    nombre:"",
    fechaObtencion:"",
    expiracion:"",
  }
  certificados: any []=[
    {id:1,certifi:"Sí, posee fecha de expiración"},
    {id:2,certifi:"no, no posee fecha de expiración"},
  ]


}
