import { Component } from '@angular/core';
import {IDomain} from "./igeneral";

@Component({
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent{
  options: Array<object> = [
    {
      id: 0,
      name: 'test1',
    },
    {
      id: 1,
      name: 'test2',
    },
  ]
  isSaved: boolean = false;
  domain = new Domain();

  onSaveForm() {
    this.isSaved = true;

    console.log(this.domain);
  }
}

export class Domain implements IDomain{

  constructor(public branding = '', public domain = '{domain}', public theme = '', public logo = '', public icon = '') {
  }
}
