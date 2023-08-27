import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  theme: string = '';
  branding: string = '';
  domain: string = '{domain}';
  isSaved: boolean = false;
  formInfo: Array<object> = [];

  onSaveForm(form: NgForm) {
    this.isSaved = true;
    this.formInfo.push(
      {
        theme: this.theme,
        branding: this.branding,
        domain: this.domain,
      }
    )

    console.log(this.formInfo);
  }

  handleTheme(event: any) {
    this.theme = event;
  }

  handleBranding(event: any) {
    this.branding = event;
  }

  handleDomain(event: any) {
    this.domain = event;
  }
}
