import {Component} from '@angular/core';
/**
 * Created by Administrator on 2018/3/11.
 */
@Component({
  selector: 'app-scenic',
  templateUrl: './scenic.component.html',
  styleUrls: ['./scenic.component.css'],
  providers: []
})
export class ScenicComponent {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
