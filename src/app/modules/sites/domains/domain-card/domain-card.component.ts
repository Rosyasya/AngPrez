import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent {
  @Input() title: string;
  @Input() img: string;
  @Input() domain: string;
  @Input() theme: string;

}
