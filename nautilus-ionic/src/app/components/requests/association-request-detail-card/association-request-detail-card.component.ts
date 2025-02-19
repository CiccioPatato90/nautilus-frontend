import {Component, Input, OnInit} from '@angular/core';
import {AssociationRequest} from "../../../api";

@Component({
  selector: 'app-association-request-detail-card',
  templateUrl: './association-request-detail-card.component.html',
  styleUrls: ['./association-request-detail-card.component.scss'],
})
export class AssociationRequestDetailCardComponent  implements OnInit {
  @Input() req: AssociationRequest = {} as AssociationRequest;

  constructor() { }

  ngOnInit() {
    return
  }

}
