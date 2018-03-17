import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageService} from '../message/message.service';
/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  postForResponse<T>(url: string, body: any): Observable<Response<T>> {
    return this.http.post<Response<T>>(url, body);
  };

  postFull<T>(url: string, body: any, success: (result: T) => void, error?: (error: any) => void): void {
    this.postForResponse<T>(url, body).subscribe(response => {
      success(response);
    }, e => {
      if (error) {
        error(e);
      }
      this.messageService.show('System error for ' + JSON.stringify(e));
    })
  }

  post<T>(url: string, body: any, success: (result: T) => void, failed?: (e: string) => void): void {
    this.postForResponse<T>(url, body).subscribe(response => {
      if (response.success) {
        success(response.result);
      } else {
        if (failed) {
          failed(response.message);
        } else {
          this.messageService.show(response.message);
        }
      }
    }, e => {
      this.messageService.show('System error for ' + JSON.stringify(e));
    })
  }

}
export interface Response<T> {
  success: boolean;
  message: string;
  result: T;
}
