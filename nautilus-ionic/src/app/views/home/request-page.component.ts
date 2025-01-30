import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../services/keycloak.service";
import {MenuController} from "@ionic/angular";
import {JoinRequestDto, RequestControllerService} from "../../api";

@Component({
  selector: 'app-home',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss'],
})
export class RequestPage implements OnInit {

  constructor(private keycloakService: KeycloakService,
              private menu: MenuController,
              private requestsController: RequestControllerService) {}

  ngOnInit() {
    console.log();
  }

}
