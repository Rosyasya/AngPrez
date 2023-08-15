import {Component, Input} from '@angular/core';
import {TabItem} from "./tab-item";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent{
  @Input() tab: TabItem;
  @Input() active: TabItem;
}
