import { Component, OnInit } from '@angular/core';
import {SettingsControllerService, Tab} from "../../api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsTabs: Tab[] = [];

  constructor(private settingsController: SettingsControllerService, private router:Router) { }

  ngOnInit() {
    this.settingsController.apiSettingsGet().subscribe(tabs => {
      this.settingsTabs = [...tabs].sort((a, b) => (a.order || 0) - (b.order || 0));
    })
  }

  navigateTo(path: string | undefined) {
    // [routerLink]="['/settings/', tab.path]"
    this.router.navigate(['/settings/'+ path]);
  }
}
