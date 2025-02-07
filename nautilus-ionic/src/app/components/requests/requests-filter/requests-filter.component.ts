import {Component, Input, OnInit} from '@angular/core';
import {Association, AssociationMgmtControllerService, RequestFilter, RequestStatus, RequestType} from "../../../api";
import {RequestsFilterService} from "../../../services/requests/requests-filter.service";

@Component({
  selector: 'app-requests-filter',
  templateUrl: './requests-filter.component.html',
  styleUrls: ['./requests-filter.component.scss'],
})
export class RequestsFilterComponent  implements OnInit {

  @Input() filters: RequestFilter = {} as RequestFilter;
  assocList: Association[] = [];

  requestStatus = Object.values(RequestStatus);

  filterFields = [
    { key: 'requestType', label: 'Request Type', type: 'text' },
    { key: 'associationName', label: 'Association Name', type: 'text' },
    { key: 'associationId', label: 'Association ID', type: 'text' },
    { key: 'status', label: 'Status', type: 'select', options: ['All', 'Pending', 'Approved', 'Rejected'] },
    { key: 'location', label: 'Location', type: 'text' },
    { key: 'dateFrom', label: 'Date From', type: 'date' },
    { key: 'dateTo', label: 'Date To', type: 'date' },
  ];

  constructor(private requestFilterService: RequestsFilterService, private associationService: AssociationMgmtControllerService) { }

  ngOnInit() {
    // this.requestFilterService.filters$.subscribe(filters => {
    //   if (filters !== null){
    //     this.filters = filters;
    //   }
    // });
    // this.associationService.apiSettingsAssocMgmtListGet().subscribe(list => {
    //   this.assocList = list;
    // })
    return
  }

  filtersChanged(event: any, field: string) {
    // this.filters[field] = event.detail.value;
    console.log(event);
  }

  changeStatus($event: Event) {
    console.log("change status", $event);
  }
}
