import { Component, OnInit } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MyService } from "src/app/services/my.service";

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  status = '';

  constructor(private myService: MyService) {
  }
  ngOnInit(): void {
    console.log('hola')
    this.myService.getServerSentEvent().pipe(
      // todo filter response to just get the data out of all the object
      // tap((message: any) => message.data),
      catchError(err => {
        console.log("ERROR!")
        return throwError(err);
      })
    ).subscribe((data) => {
      this.status = JSON.parse(data.data).msg;
      console.log('NEW STATUS', this.status)
    })
  }
}
