/**
 * Created by Administrator on 2017/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {SessionService} from '../common/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private session: SessionService, private route: Router) {
  }

  ngOnInit(): void {
    if (this.session.get('userId')) {
      this.route.navigate(['scenic']).then();
    }
  }

}
