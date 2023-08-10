import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-domain-management',
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.scss']
})
export class DomainManagementComponent{
  constructor(private router: Router) {
  }
  tabs = DomainTabs.values();
  activeTab: DomainTabs;

  switchTab(tab: DomainTabs) {
    this.activeTab = tab;
    this.router.navigate(['domains', '1', tab.name.toLowerCase()]);
  }
}

class DomainTabs {
  public static GENERAL: DomainTabs = new DomainTabs('General', 'GENERAL');
  public static INFRASTRUCTURE_PAGES: DomainTabs = new DomainTabs('Infrastructure Pages', 'INFRASTRUCTURE PAGES');
  public static PLUGINS: DomainTabs = new DomainTabs('Plugins', 'PLUGINS');
  public static LAYOUTS: DomainTabs = new DomainTabs('Layouts', 'LAYOUTS');
  public static values(): DomainTabs[] {
    return [
      DomainTabs.GENERAL,
      DomainTabs.INFRASTRUCTURE_PAGES,
      DomainTabs.PLUGINS,
      DomainTabs.LAYOUTS
    ];
  }

  constructor(public name: string, public id: string) {}
}
