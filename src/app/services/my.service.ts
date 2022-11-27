import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { SseService } from "./sse.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private _zone: NgZone, private _sseService: SseService, private http: HttpClient) { }



  setStatus(): void {
    console.log('setStatus')
    this.http.put('http://localhost:3000/status', { status: 'WORKING' }).subscribe(data => {
      console.log('POST')
    })
  }

  getServerSentEvent() {
    return Observable.create(observer => {

      const eventSource = this._sseService.getEventSource();

      eventSource.onopen = function () {
        console.log('connection is opened.');
      };


      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        })
      }

      eventSource.onerror = error => {
        console.log('error', error)
        this._zone.run(() => {
          observer.error(error)
        })
      }
    })
  }
}
