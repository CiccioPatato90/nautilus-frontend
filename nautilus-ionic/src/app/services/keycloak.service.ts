import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private keycloak = new Keycloak({
    url: 'http://192.168.1.25:8080',
    realm: 'quarkus', // Replace with your realm name
    clientId: 'nautilus-client',
    // clientId: 'backend-service',
  });

  public init(): Promise<boolean> {
    return this.keycloak
      .init({
        onLoad: 'login-required', // Forces redirection to Keycloak for login
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        console.log('Keycloak initialized. Authenticated:', authenticated);
        return authenticated;
      })
      .catch((err) => {
        console.error('Keycloak initialization failed', err);
        return false;
      });
  }

  public getUserInfo(){
    return this.keycloak.loadUserProfile();
  }

  public async refreshToken(minValidity: number = 30): Promise<void> {
    try {
      const refreshed = await this.keycloak.updateToken(minValidity);
      if (refreshed) {
        console.log('Token successfully refreshed');
      } else {
        console.log('Token is still valid; no refresh needed');
      }
    } catch (error) {
      console.error('Failed to refresh token:', error);
      this.logout();
    }
  }

  public getToken(): string | undefined {
    return this.keycloak.token;
  }

  public logout(): void {
    this.keycloak.logout();
  }

  public isAuthenticated(): boolean {
    return !!this.keycloak.authenticated;
  }
}
