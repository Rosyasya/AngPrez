import {Component, Input} from '@angular/core';
import {Content} from "../content";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() content: Content;
  tags: Array<object> = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}, {name: 'Item 5'}, {name: 'Item 6'}, {name: 'Item 7'}];
  handleImage(event: any) {
    this.content.detailsImg = event;
  }
}
