import {Component, Input} from '@angular/core';
import {IDomains} from "../../../modules/sites/domains";

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent{
  @Input() card: IDomains;
}
