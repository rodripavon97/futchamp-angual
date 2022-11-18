import { EquipoServiceService } from './../../service/equipoService.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tablaEquipos',
  templateUrl: './tablaEquipos.component.html',
  styleUrls: ['./tablaEquipos.component.css']
})
export class TablaEquiposComponent implements OnInit {
  listaEquipo: any = [];
  faTrash = faTrash

  constructor(public dataServices :EquipoServiceService ) { }

  ngOnInit() {
    this.dataServices.getEquipos()
  }
  
  
  
 

 
  }

