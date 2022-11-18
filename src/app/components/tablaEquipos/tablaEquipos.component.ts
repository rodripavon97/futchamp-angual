import { EquipoServiceService } from './../../service/equipoService.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tablaEquipos',
  templateUrl: './tablaEquipos.component.html',
  styleUrls: ['./tablaEquipos.component.css']
})
export class TablaEquiposComponent implements OnInit {
  listaEquipo: any = [];
  constructor(public dataServices :EquipoServiceService ) { }

  ngOnInit() {
 
  }
 

 
  }

