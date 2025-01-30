import { Component, OnInit } from '@angular/core';
import {JoinRequest, RequestControllerService, RequestFilter} from "../../api";

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.scss'],
})
export class JoinRequestsComponent  implements OnInit {

  filters: RequestFilter = {} as RequestFilter;
  requests: JoinRequest[] = [];
  constructor(private requestController: RequestControllerService) { }

  ngOnInit() {
    this.filters = Object.assign({} as RequestFilter, {
    //status: 'Refused'
    } as RequestFilter);

    this.requestController.apiRequestsGetPost(this.filters).subscribe(requests => {
      this.requests = requests;
    });

  }

}
