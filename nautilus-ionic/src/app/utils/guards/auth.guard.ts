import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import {KeycloakService} from "../../services/keycloak.service";

export const authGuard: CanActivateFn = (route, state) => {
  const keycloak = inject(KeycloakService);

  if (keycloak.isAuthenticated()) {
    console.log("token: ", keycloak.getToken())
    console.log("user: ", keycloak.getUserInfo())
    return true; // Allow access
  } else {
    return false; // Prevent access until login
  }
};

