import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {KeycloakService} from "../services/keycloak.service";
import {NavigationService} from "../services/navigation.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private navigationService: NavigationService, private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req);
    if (req.url.includes('/login')) {
      return next.handle(req); // Skip token for /login
    }
    const token = this.keycloakService.getToken();

    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(clonedReq).pipe(
      tap(() => {}, (err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          console.warn('Session expired. Please login again.');
          this.navigationService.navigateToLogin();
        }
      })
    );
  }

}
