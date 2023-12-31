import { Component } from '@angular/core';
import {DomainsService} from "./domains.service";
import {IDomains} from "./domains";

@Component({
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent extends DomainsService{
  domains: Array<IDomains> = this.info;
}
