import {Component, Input} from '@angular/core';
import {Content} from "../content";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  @Input() content: Content;
  contentType = ['Gallery', 'Article', 'Quiz'];
  cardHandle(type: string) {
    this.content.type = type;
  }
}
