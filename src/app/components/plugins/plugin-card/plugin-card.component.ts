import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.scss']
})
export class PluginCardComponent {
  @Input() card: any;
}
