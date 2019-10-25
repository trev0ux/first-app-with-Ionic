import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  postData = {
    name: "AAATTTAdmin",
    email:"tat1tt@gmail.com",
    password: "654321",
    confirma_password: "654321"
  };
  
  url = 'http://45.55.144.89/fsapi/users/auth/register-jwt';
  json;

  ngOnInit() {
  }

  constructor(private http: HttpClient) {

    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json);
      this.json = JSON.stringify(data.json);
    });

   }


}


