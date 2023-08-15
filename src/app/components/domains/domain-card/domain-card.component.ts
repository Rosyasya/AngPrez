import {Component, Input} from '@angular/core';
import {DomainCard} from "./domain-card";

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent{
  constructor() {
  }

  @Input() card: DomainCard;

}
