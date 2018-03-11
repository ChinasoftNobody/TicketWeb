import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  postForResponse<T>(url: string, body: any): Observable<Response<T>> {
    return this.http.post<Response<T>>(url, body);
  };

  post<T>(url: string, body: any, success?: (result: T) => void, failed?: (e: string) => void) {
    this.postForResponse<T>(url, body).subscribe(response => {
      if (response.success) {
        success(response.result);
      } else {
        failed(response.message);
      }
    }, e => {
      console.error('http request failed');
    })
  }

}
export interface Response<T> {
  success: boolean;
  message: string;
  result: T;
}
