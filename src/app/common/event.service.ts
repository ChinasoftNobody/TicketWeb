import {EventEmitter, Injectable} from '@angular/core';
/**
 * Created by Administrator on 2018/3/11.
 */
@Injectable()
export class EventService {
  public eventbus: EventEmitter<any> = new EventEmitter<any>();
  public event_login = 'login';
}
