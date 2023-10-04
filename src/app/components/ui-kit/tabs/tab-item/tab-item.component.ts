import {Component, Input} from '@angular/core';
import {TabItem} from "./tab-item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent{
  constructor(public router: Router) {

  }
  @Input() tab: TabItem;
  // @Input() active: TabItem;
}
