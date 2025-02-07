import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title: string = 'App Title';


  constructor(private router: NavController) {}

  goBack() {
    this.router.back();
  }
}
