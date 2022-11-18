import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REST_SERVER_URL } from './configuracion';

@Injectable({
  providedIn: 'root'
})
export class EquipoServiceService {
  public team: any[] = []

constructor(private httpClient: HttpClient) {
  this.getEquipos()
 }


 private getEquipos() {
  this.httpClient.get('http://localhost:3000/equipos').subscribe(
    {next: (res : any) =>{ this.team = res},
    error: (e) => console.error(e)}
  )

}
}
