import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  peliculas = [{code:"",name:"",description:"",availability:""}];
  constructor() { }

  ngOnInit(): void {
    this.getFilms();
  }
  getFilms (){
    var localStoreFilms = localStorage.getItem("list_films");
    console.log("localStoreFilms",)
    if(localStoreFilms != null)
      this.peliculas= JSON.parse(localStoreFilms);
  }

}
