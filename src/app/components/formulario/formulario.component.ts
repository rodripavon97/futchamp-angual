import { Router } from '@angular/router';
import { EquipoServiceService, EquipoTemplate } from './../../service/equipoService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  idEquipo = 0
  nombre = ""
  ciudad=""
  estadio = ""
  fecha= new Date()
  
  constructor(public dataService : EquipoServiceService, private router : Router) { }

  ngOnInit() {
  }
  
  subirDatos() {
    this.dataService.guardarEquipo(this.nombre, this.ciudad,this.estadio,this.fecha)
    this.navegarAEquipos()
  }
  navegarAEquipos():void {
    this.router.navigate(['/equipo'])
  }

}
