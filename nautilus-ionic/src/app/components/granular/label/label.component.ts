import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent{
  @Input() text: string | number | undefined | null = "";
  @Input() description: string = "";
  @Input() textStyle: { [key: string]: any } = {};
  @Input() descriptionStyle: { [key: string]: any } = {};

  constructor() { }

}
