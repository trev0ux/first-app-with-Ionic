import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name: string = ""
  email: string = ""
  password: string = ""
  confirm: string = ""

  ngOnInit() {
  }

  constructor(public afAuth: AngularFireAuth) { }


  async register() {
    const { name, password, email, confirm } = this
    if(password !== confirm) {
      return console.error("Senhas não coincidem")
    } 
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)      
      console.log(res)
  } catch(error) {
      console.dir(error)
    }
}

}


