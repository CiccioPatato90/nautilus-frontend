import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiModule, Configuration, ConfigurationParameters} from "./api";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./utils/token.interceptor";
import {ComponentsModule} from "./components/components.module";
import {KeycloakService} from "./services/keycloak.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    basePath:  "http://localhost:8080",
  }
  return new Configuration(params);
}

export function initializeKeycloak(authService: KeycloakService) {
  return () => authService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(),
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
