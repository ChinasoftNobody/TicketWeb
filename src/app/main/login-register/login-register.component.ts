/**
 * Created by Administrator on 2017/12/17.
 */
import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {LoginRegisterService} from './login-register.service';
import {Router} from '@angular/router';
import {SessionService} from '../../common/session.service';
import {EventService} from '../../common/event.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  providers: [LoginRegisterService]
})
export class LoginRegisterComponent {
  loginNumberFormControl = new FormControl('', [Validators.required]);
  loginPasswordFormControl = new FormControl('', [Validators.required]);
  registerNumberFormControl = new FormControl('', [Validators.required, Validators.pattern(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/)]);
  registerPasswordFormControl = new FormControl('', [Validators.required]);
  registerRePasswordFormControl = new FormControl('', [Validators.required]);
  title: any = 'Login';
  exchangeText: any = 'Register';
  loginTab = true;
  registerTab = false;
  login: any = {
    user: {
      number: '',
      password: ''
    },
    loginFailed: false,
    loginFailedMessage: ''
  };
  register: any = {
    user: {
      number: '',
      password: '',
      name: ''
    },
    rePassword: '',
    rePasswordFailed: false,
    registerFailed: false,
    registerFailedMessage: ''
  };

  constructor(private loginRegisterService: LoginRegisterService,
              private router: Router,
              private session: SessionService,
              private eventService: EventService) {
  }

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
      this.login.loginFailed = false;
      if (this.loginNumberFormControl.hasError('required') || this.loginNumberFormControl.hasError('pattern')
        || this.loginPasswordFormControl.hasError('required')) {
        return;
      } else {
        this.loginRegisterService.login(this.login.user).subscribe(rep => {
          if (rep.success) {
            this.saveUser(rep.result);
            this.goToScenicPage();
          } else {
            this.login.loginFailed = true;
            this.login.loginFailedMessage = rep.message;
          }
        });
      }
    } else {
      this.register.registerFailed = false;
      this.register.rePasswordFailed = false;
      if (this.registerNumberFormControl.hasError('required') || this.registerNumberFormControl.hasError('pattern')
        || this.registerPasswordFormControl.hasError('required') || this.registerRePasswordFormControl.hasError('required')) {
        return;
      } else {
        if (this.register.user.password !== this.register.rePassword) {
          this.register.registerFailed = true;
          this.register.registerFailedMessage = 'Passwords are not same';
          return;
        }
        this.loginRegisterService.register(this.register.user).subscribe(rep => {
          if (rep.success) {
            this.saveUser(rep.result);
            this.goToScenicPage();
          } else {
            this.register.registerFailed = true;
            this.register.registerFailedMessage = rep.message;
          }
        });
      }
    }
  }

  private goToScenicPage() {
    this.router.navigate(['/scenic']).then();
  }

  saveUser(user: any) {
    this.session.put('userId', user.id);
    this.session.put('userName', user.name);
    this.session.put('userNumber', user.number);
    this.eventService.eventbus.emit({
      key: this.eventService.event_login
    });
  }

}
