import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {
  @ViewChild('inputempresa',{ read: ElementRef }) inputempresa: ElementRef;
  @ViewChild('inputano_inicio',{ read: ElementRef }) inputano_inicio: ElementRef;
  @ViewChild('inputcargo',{ read: ElementRef }) inputcargo: ElementRef;
  
  constructor(private activeroute: ActivatedRoute) {
    this.inputempresa = ElementRef.prototype as any;
    this.inputano_inicio = ElementRef.prototype as any;
    this.inputcargo = ElementRef.prototype as any;
   }

  ngOnInit() {}
  exp={
    empresa:"",
    ano_inicio:"",
    trabajando:"",
    cargo:"",
  }

  trabaja:any[]=[
    {id:1,tra:"Sí, actualmente trabajando"},
    {id:2,tra:"No, actualmente sin trabajo"},
  ]
  data:any;

}
