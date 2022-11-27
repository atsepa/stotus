import { Component, OnInit } from '@angular/core';
import { MyService } from './services/my.service';
import { WebsocketService } from "./services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebsocketService]
})
export class AppComponent implements OnInit {

  constructor(private _myService: MyService) {
  }
  ngOnInit(): void {
    this._myService.setStatus();
  }


}
