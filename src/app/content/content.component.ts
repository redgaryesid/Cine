import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  userActive  = this.getUserActive();
  constructor() { }

  ngOnInit(): void {
  }

  getUserActive(){
    var user =  localStorage.getItem("user_active")
    if(user != null)
    return JSON.parse(user);
  }

}
