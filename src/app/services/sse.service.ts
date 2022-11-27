import { Injectable } from "@angular/core";
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  getEventSource(): EventSource {
    return new EventSource(`${BASE_URL}`);
  }
}
