import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DomainsComponent } from './modules/sites/domains/domains.component';
import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { DomainCardComponent } from './components/domains/domain-card/domain-card.component';
import { DomainManagementComponent } from './modules/sites/domains/domain-management/domain-management.component';
import { TabItemComponent } from './components/ui-kit/tabs/tab-item/tab-item.component';
import { GeneralComponent } from './modules/sites/domains/domain-management/general/general.component';
import { InfrastructurePagesComponent } from './modules/sites/domains/domain-management/infrastructure-pages/infrastructure-pages.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { ButtonComponent } from './components/ui-kit/button/button.component';
import { ImageUploadComponent } from './components/ui-kit/image-upload/image-upload.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import {FormsModule} from "@angular/forms";
import { PluginsComponent } from './modules/sites/domains/domain-management/plugins/plugins.component';
import { PluginCardComponent } from './components/plugins/plugin-card/plugin-card.component';
import { SearchComponent } from './components/ui-kit/search/search.component';
import { ContentManagementComponent } from './modules/sites/content/content-management/content-management.component';
import { ContentCardComponent } from './components/content/content-card/content-card.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { TypeComponent } from './modules/sites/content/content-management/type/type.component';
import { DetailsComponent } from './modules/sites/content/content-management/details/details.component';
import {ContentComponent} from "./modules/sites/content/content.component";

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
        pathMatch: 'full',
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'infrastructure',
        component: InfrastructurePagesComponent,
      },
      {
        path: 'plugins',
        component: PluginsComponent,
      },
      {
        path: 'layouts',
        component: InfrastructurePagesComponent,
      },
    ],
  },
  {
    path: 'content/:id/:name',
    component: ContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'info',
        component: ContentManagementComponent,
      },
      {
        path: 'type',
        component: TypeComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
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
    InfrastructurePagesComponent,
    InputComponent,
    ButtonComponent,
    ImageUploadComponent,
    TabsComponent,
    SelectComponent,
    PluginsComponent,
    PluginCardComponent,
    SearchComponent,
    ContentManagementComponent,
    ContentCardComponent,
    PaginationComponent,
    TypeComponent,
    DetailsComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
