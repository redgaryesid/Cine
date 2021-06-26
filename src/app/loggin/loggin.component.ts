import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  mensaje = "";
  users = [{
    userpassword:"123",
    username:"usuario",
    role:"usuario"
  },{
    userpassword:"123",
    username:"admin",
    role:"administrador"
  }];
  userActiveData={userpassword:"",
  username:"",
  role:""};
  newItem= "";
  logginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    userpassword: new FormControl('',Validators.required)
  });
  constructor() { }


  ngOnInit(): void {
  }
  loggin(){
    if(this.getUserData()){
      localStorage.setItem("user_active",JSON.stringify(this.userActiveData));
      location.reload(true);
    }else{
      this.mensaje = "Error en usuario y/o contraseña";
    }

  }
  getUserData(){
    var username = this.logginForm.value.username;
    var userpassword = this.logginForm.value.userpassword;
    for (var i  = 0; i < this.users.length;i++){
      var currentUser = this.users[i];
      if(currentUser.username == username && currentUser.userpassword == userpassword){
        return true;
      }
    }
    return false;

  }

}
