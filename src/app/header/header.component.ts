import { PeliculasService } from './../peliculas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  peliculas = [{id:""}];


  constructor(service: PeliculasService) {
    this.peliculas = service.getPeliculas();
  }

  ngOnInit(): void {

  }
  signOff(){
    //localStorage.clear();
    localStorage.removeItem("user_active");
    location.reload(true);
  }

}
