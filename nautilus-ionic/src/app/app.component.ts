import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {KeycloakService} from "./services/keycloak.service";
import {AuthControllerService, Tab} from "./api";
import {Utente} from "./api/model/utente";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userInfo : Utente = {} as Utente;

  public appPages: Tab[] = [];

  constructor(private menu: MenuController,
              private keycloakService: KeycloakService,
              private authController: AuthControllerService) {

  }

  ngOnInit(){
    this.keycloakService.getUserInfo().then((userInfo) => {
      if (userInfo) {
        this.userInfo.firstName = userInfo.firstName;
        this.userInfo.lastName = userInfo.lastName;
        this.userInfo.email= userInfo.email;
      }
    });

    this.authController.apiAuthInitGet().pipe().subscribe(tabs => {
      this.appPages = [...tabs].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

  }

  toggleMenu(menuId: string) {
    this.menu.toggle(menuId);
  }


  logout() {
    this.keycloakService.logout();
  }
}
