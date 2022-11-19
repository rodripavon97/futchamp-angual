import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from './configuracion';

@Injectable({
  providedIn: 'root',
})
export class EquipoServiceService {
  public team: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getEquipos() {
    this.httpClient.get('http://localhost:3000/equipos').subscribe({
      next: (res: any) => {
        this.team = res;
      },
      error: (e) => console.error(e),
    });
  }
  public deleteEquipo(id: number) {
    return this.httpClient
      .delete('http://localhost:3000/eliminar/' + id)
      .subscribe(
        {next:  res => {
          console.log("equipo eliminado");
          this.getEquipos();
        },
      error: (e) => console.error(e)}
      );
  }

  public guardarEquipo(nombre_: string, ciudad_:string, estadio_:string, fecha_:Date) {
    this.httpClient.post('http://localhost:3000/enviar', {
      nombre: nombre_,
      ciudad: ciudad_,
      estadio: estadio_,
      fecha: fecha_
    }).subscribe()
  }
}

export interface EquipoTemplate {
  idEquipo: number,
  nombre?: string,
  ciudad?: string,
  estadio?: string,
  fecha?: Date
};