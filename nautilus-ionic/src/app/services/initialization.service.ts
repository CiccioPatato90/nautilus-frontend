import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
import {Utente} from "../api/model/utente";

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  // BehaviorSubject to track the current JWT token
  private tokenSubject = new BehaviorSubject<string | null>(this.getTokenFromLocalStorage());
  private userSubject = new BehaviorSubject<Utente | null>(null);

  // Observable for other components to subscribe to the token changes
  token$ = this.tokenSubject.asObservable();
  utente$ = this.userSubject.asObservable();

  constructor() {}

  // Method to set the JWT token in localStorage and BehaviorSubject
  setToken(token: string): void {
    localStorage.setItem('jwt', token);
    this.tokenSubject.next(token); // Notify subscribers about the new token
  }

  setUser(user: Utente): void {
    this.userSubject.next(user); // Notify subscribers about the new token
  }

  // Method to delete the JWT token from localStorage and BehaviorSubject
  clearToken(): void {
    localStorage.removeItem('jwt');
    this.tokenSubject.next(null); // Notify subscribers that the token is cleared
  }

  getHeaders(){
    return new HttpHeaders({
      Authorization: `Bearer ${this.getTokenFromLocalStorage()}`,
    });
  }

  // Private helper to get the token from localStorage
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('jwt');
  }

}
