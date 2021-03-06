import {Injectable} from '@angular/core';
import {HttpService} from '../../common/http/http.service';
import {ServerConfig} from '../../config/server.config';
import {Observable} from 'rxjs';
/**
 * Created by Administrator on 2018/3/11.
 */
@Injectable()
export class LoginRegisterService {
  constructor(private http: HttpService, private server: ServerConfig) {
  }

  login(user: any, success: (result: any) => void): void {
    this.http.postFull(this.server.getUrl('user.login'), user, success);
  }

  register(user: any, success: (result: any) => void): void {
    this.http.postFull(this.server.getUrl('user.register'), user, success);
  }
}
