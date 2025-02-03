import { Component, OnInit } from '@angular/core';
import {RequestControllerService} from "../../api";
import {JoinRequestDto} from "../../api/model/joinRequestDto";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  constructor(private requestsController: RequestControllerService) { }

  ngOnInit() {
    console.log();
  }

  mockAddRequest() {
    var requestDto = Object.assign({} as JoinRequestDto, {
      associationName: `Association ${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      date: new Date().toISOString().split("T")[0],
      motivation: "We would like to partner for an upcoming event.",
      contactInfo: {
        email: `contact${Math.floor(Math.random() * 100)}@example.com`,
        phone: `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      },
      status: 'Pending',
      requestSource: 'web',
      history: [
        {
          changedBy: "client",
          timestamp: new Date().toISOString()
        },
      ],
    } as JoinRequestDto);

    console.log("sending:", requestDto);

    this.requestsController.apiRequestsAddPost(requestDto).subscribe(value => {
      console.log("received response!!! ", value);
    })
  }

}
