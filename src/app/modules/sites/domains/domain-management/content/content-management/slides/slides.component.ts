import {Component, Input} from '@angular/core';
import {Content} from "../content";

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent {
  @Input() content: Content;
}
