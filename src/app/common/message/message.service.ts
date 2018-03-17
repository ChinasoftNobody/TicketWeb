import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
/**
 * Created by Administrator on 2018/3/17.
 */
@Injectable()
export class MessageService {
  config: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar) {
    this.config.duration = 3000;
  }

  show(message: any) {
    this.snackBar.dismiss();
    this.snackBar.open(message, null, this.config);
  }
}
