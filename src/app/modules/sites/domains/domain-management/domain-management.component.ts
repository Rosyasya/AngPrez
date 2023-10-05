import {Component} from '@angular/core';
import {TabItem} from "../../../../components/ui-kit/tabs/tab-item/tab-item";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.scss']
})
export class DomainManagementComponent{
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      })
  }

  id: number;

  tabs = DomainTabs.values();
}

export class DomainTabs {
  public static GENERAL: TabItem = new DomainTabs('General', 'general');
  public static INFRASTRUCTURE_PAGES: TabItem = new DomainTabs('Infrastructure Pages', 'infrastructure');
  public static PLUGINS: TabItem = new DomainTabs('Plugins', 'plugins');
  public static LAYOUTS: TabItem = new DomainTabs('Layouts', 'layouts');
  public static CONTENT: TabItem = new DomainTabs('Content', 'content');
  public static values(): TabItem[] {
    return [
      DomainTabs.GENERAL,
      DomainTabs.INFRASTRUCTURE_PAGES,
      DomainTabs.PLUGINS,
      DomainTabs.LAYOUTS,
      DomainTabs.CONTENT,
    ];
  }

  constructor(public name: string, public id: string) {}
}
