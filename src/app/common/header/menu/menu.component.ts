/**
 * Created by Administrator on 2017/12/17.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router){

  }
  project(){
    this.router.navigate(['/project']).then();
  }
}
