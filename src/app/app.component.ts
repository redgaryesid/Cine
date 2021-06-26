import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggin=this.getIsLoggin();
  userActive = {};


  getIsLoggin(){
    var userData = localStorage.getItem("user_active");
    if(userData != null){
      this.userActive = JSON.parse(userData);
      return true;
    }
    else{
      return false;
    }

  }
}
