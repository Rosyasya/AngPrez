import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui-kit/header/header.component';
import { SitesComponent } from './pages/sites/sites.component';
import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  { path: 'sites', component: SitesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SitesComponent,
    CardComponent
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
