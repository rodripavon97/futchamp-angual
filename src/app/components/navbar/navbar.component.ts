import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarARegistrar() {
    this.router.navigate(['/registrar'])
  }

  navegarAHome() {
    this.router.navigate(['/home'])
  }

  navegarAEquipo() {
    this.router.navigate(['/equipo'])
  }
}
