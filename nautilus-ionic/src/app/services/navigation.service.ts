import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}
  // Navigate to the login page
  navigateToLogin(): Promise<boolean> {
    return this.router.navigate(['/']);
  }
}
