/**
 * Created by Administrator on 2018/3/11.
 */
import {Injectable} from '@angular/core';
import has = Reflect.has;

@Injectable()
export class SessionService {

  /**
   * 得到session的值
   * @param {string} key
   * @returns {any}
   */
  public get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  /**
   * 添加session
   *
   * @param {string} key
   * @param value
   */
  public put(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

}
