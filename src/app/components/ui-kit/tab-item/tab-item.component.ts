import {Component, Input} from '@angular/core';
import {IDomainTab} from "./idomain-tab";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent{
  @Input() tab: IDomainTab;
  @Input() active: IDomainTab;
}
