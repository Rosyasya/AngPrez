import {Component} from '@angular/core';
import {TabItem} from "../../../../components/ui-kit/tabs/tab-item/tab-item";

@Component({
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.scss']
})
export class DomainManagementComponent{
  tabs = DomainTabs.values();
}

export class DomainTabs {
  public static GENERAL: TabItem = new DomainTabs('General', 'general');
  public static INFRASTRUCTURE_PAGES: TabItem = new DomainTabs('Infrastructure Pages', 'infrastructure');
  public static PLUGINS: TabItem = new DomainTabs('Plugins', 'plugins');
  public static LAYOUTS: TabItem = new DomainTabs('Layouts', 'layouts');
  public static values(): TabItem[] {
    return [
      DomainTabs.GENERAL,
      DomainTabs.INFRASTRUCTURE_PAGES,
      DomainTabs.PLUGINS,
      DomainTabs.LAYOUTS,
    ];
  }

  constructor(public name: string, public id: string) {}
}
