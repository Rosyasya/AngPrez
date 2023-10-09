import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  details = {
    link: '',
    category: '',
    author: '',
    tag: [],
    landing: false,
    trending: false,
    description: '',
  }
  @Output() detailsHandle = new EventEmitter<object>();
}
