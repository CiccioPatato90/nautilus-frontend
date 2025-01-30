import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  // Navigate to a specific route
  navigateTo(path: string, params?: any): Promise<boolean> {
    return this.router.navigate([path], { queryParams: params });
  }

  // Navigate back to the previous page
  navigateBack(): void {
    window.history.back();
  }

  // Navigate to the login page
  navigateToLogin(): Promise<boolean> {
    return this.router.navigate(['/']);
  }

  // Navigate to the home page
    navigateToHome(): Promise<boolean> {
    return this.router.navigate(['/home']);
  }

  // Check if the current route matches a specific path
  isCurrentRoute(path: string): boolean {
    return this.router.url === path;
  }
}
