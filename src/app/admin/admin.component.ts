import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  peliculas = [{code:"",name:"",description:"",time:""}];
  pelisForm = new FormGroup({
    code: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    availability: new FormControl('',Validators.required)
  });
  constructor() { }
  //
  ngOnInit(): void {
  }

  create(){
    var peliculas = localStorage.getItem("list_films");
    var arrayPelis = [];
    if(peliculas != null){
      arrayPelis = JSON.parse(peliculas);
    }

    arrayPelis.push(this.pelisForm.value);
    localStorage.setItem("list_films",JSON.stringify(arrayPelis));
  }

}
