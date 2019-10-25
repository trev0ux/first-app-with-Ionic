import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  postData = {
    "email": "tlopes@gmail.com",
    "password": "123456"
  };
  
  url1 = 'http://45.55.144.89/fsapi/users/login';
  json;

  constructor(
    private http: HttpClient
  ) {

    this.http.post(this.url1, this.postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json);
      this.json = JSON.stringify(data.json);
    });
  }

  ngOnInit() {
  }

  

  }





