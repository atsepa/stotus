import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MyService } from "src/app/services/my.service";

@Component({
	selector: 'app-view-status-page',
	templateUrl: './view-status-page.component.html',
	styleUrls: ['./view-status-page.component.scss']
})
export class ViewStatusPageComponent implements OnInit {

	status = '';

	constructor(private myService: MyService) {
	}
	ngOnInit(): void {
		console.log('INIT')
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
