/**
 * Created by Administrator on 2017/12/17.
 */
import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  loginNumberFormControl = new FormControl('', [Validators.required, Validators.pattern(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/)]);
  loginPasswordFormControl = new FormControl('', [Validators.required]);
  title: any = 'Login';
  exchangeText: any = 'Register';
  loginTab = true;
  registerTab = false;
  login: any = {
    user: {
      number: '',
      password: ''
    }
  };
  register: any = {
    user: {
      number: '',
      password: '',
      name: ''
    },
    rePassword: ''
  };

  exchange() {
    this.loginTab = !this.loginTab;
    this.registerTab = !this.registerTab;
    if (this.loginTab) {
      this.exchangeText = 'Register';
      this.title = 'Login';
    } else {
      this.exchangeText = 'Login';
      this.title = 'Register';
    }
  }

  login_register() {
    if (this.loginTab) {
      if (this.loginNumberFormControl.hasError('required') || this.loginNumberFormControl.hasError('pattern')
        || this.loginPasswordFormControl.hasError('required')) {
        return;
      } else {
        //TODO
      }
    } else {
      console.log(this.register.user)
    }
  }

}
