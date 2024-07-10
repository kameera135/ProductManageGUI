import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  hidePassword = true;
  visible = true;

  startLoginInProcess: boolean = false;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void{

    // let savedUsername: any = this.getCookie("username");
    // let savedLogin: boolean = true;
    // if (savedUsername == undefined || savedUsername == null) {
    //   savedUsername = '';
    //   savedLogin = false;
    // }

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     // remember_login: [savedLogin]
    });
  }

  login() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  togglePasswordVisibility() {
    throw new Error('Method not implemented.');
  }

  getCookie(cookieName: string) {
    var cookieValue = undefined;
    var cookieArray = document.cookie.split(";");

    for (var i = 0; i < cookieArray.length; i++) {
      var cookiePair = cookieArray[i].split("=");
      var name = cookiePair[0].trim();

      if (name === cookieName) {
        cookieValue = decodeURIComponent(cookiePair[1]);
        break;
      }
    }

    return cookieValue;
  }

}
