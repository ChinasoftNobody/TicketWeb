import {Component, OnInit} from '@angular/core';
import {StoreService} from './store.service';
/**
 * Created by Administrator on 2018/3/14.
 */
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private storeService: StoreService) {
  }
}
