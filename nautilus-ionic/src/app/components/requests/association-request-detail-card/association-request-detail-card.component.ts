import {Component, Input, OnInit} from '@angular/core';
import {JoinRequest} from "../../../api";

@Component({
  selector: 'app-association-request-detail-card',
  templateUrl: './association-request-detail-card.component.html',
  styleUrls: ['./association-request-detail-card.component.scss'],
})
export class AssociationRequestDetailCardComponent  implements OnInit {
  @Input() req: JoinRequest = {} as JoinRequest;

  constructor() { }

  ngOnInit() {
    return
  }

}
