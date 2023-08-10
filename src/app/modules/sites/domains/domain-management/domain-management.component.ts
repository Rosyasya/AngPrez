import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-domain-management',
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.scss']
})
export class DomainManagementComponent implements OnInit{
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }
  tabs = DomainTabs.values();
  activeTab: DomainTabs;
  id: string = this.activatedRouter.snapshot.url[1].path;
  switchTab(tab: DomainTabs) {
    this.activeTab = tab;
    this.router.navigate(['domains', this.id, tab.name.toLowerCase()]);
  }

  ngOnInit(): void {
    console.log(this.id);
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
