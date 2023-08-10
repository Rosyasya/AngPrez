import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui-kit/header/header.component';
import { DomainsComponent } from './modules/sites/domains.component';
import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { DomainCardComponent } from './modules/sites/domains/domain-card/domain-card.component';
import { DomainManagementComponent } from './modules/sites/domains/domain-management/domain-management.component';
import { TabItemComponent } from './components/ui-kit/tab-item/tab-item.component';
import { GeneralComponent } from './modules/sites/domains/domain-management/general/general.component';
import { InfrastructurePagesComponent } from './modules/sites/domains/domain-management/infrastructure-pages/infrastructure-pages.component';

const appRoutes: Routes = [
  {
    path: 'domains',
    component: DomainsComponent,
  },
  {
    path: 'domains/:id',
    component: DomainManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'infrastructure pages',
        component: InfrastructurePagesComponent,
      },
      {
        path: 'plugins',
        component: InfrastructurePagesComponent,
      },
      {
        path: 'layouts',
        component: InfrastructurePagesComponent,
      },
    ],
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DomainsComponent,
    DomainCardComponent,
    DomainManagementComponent,
    TabItemComponent,
    GeneralComponent,
    InfrastructurePagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
