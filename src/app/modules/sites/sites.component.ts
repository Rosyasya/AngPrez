import { Component } from '@angular/core';
import {SitesService} from "./sites.service";
import {ISites} from "./sites";

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent extends SitesService{
  sites: Array<ISites> = this.info;
}
