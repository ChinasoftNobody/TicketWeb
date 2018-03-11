/**
 * Created by Administrator on 2017/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../event.service';
import {SessionService} from '../../session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginFlag = false;
  userName = '';

  ngOnInit(): void {
    this.userName = this.session.get('userName');
    if (this.userName) {
      this.loginFlag = true;
    }
    this.eventService.eventbus.subscribe(next => {
      if (next.key === this.eventService.event_login) {
        this.loginFlag = true;
        this.userName = this.session.get('userName');
      }
    })
  }


  constructor(private router: Router,
              private eventService: EventService,
              private session: SessionService) {
  }

  login() {
    this.router.navigate(['/index']).then();
  }

  logout() {
    this.session.clear();
    this.loginFlag = false;
    this.router.navigate(['index']).then();
  }
}
