import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RequestFilter} from "../../api";

@Injectable({
  providedIn: 'root'
})
export class RequestsFilterService {
  // BehaviorSubject to track the current JWT token
  private filtersSubject = new BehaviorSubject<RequestFilter | null>(null);
  // Observable for other components to subscribe to the token changes
  filters$ = this.filtersSubject.asObservable();

  constructor() { }

  setFilters(filters: RequestFilter): void {
    this.filtersSubject.next(filters); // Notify subscribers about the new token
  }
}
