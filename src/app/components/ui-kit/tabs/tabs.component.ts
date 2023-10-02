import {Component, Input, OnInit} from '@angular/core';
import {TabItem} from "./tab-item/tab-item";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DomainTabs} from "../../../modules/sites/domains/domain-management/domain-management.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent{
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
      })
  }

  @Input() tabs: Array<TabItem>;
  activeTab: TabItem;
  id: number;

  switchTab(tab: DomainTabs) {
    this.activeTab = tab;
    this.router.navigate(['domains', this.id, tab.id]);
  }
}
