import { Component } from '@angular/core';

@Component({
  templateUrl: './infrastructure-pages.component.html',
  styleUrls: ['./infrastructure-pages.component.scss']
})
export class InfrastructurePagesComponent {
  files: Array<File> = [];
  isDisabled: boolean = true;
  text: any = '';

  test(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onloadend = () => {
      this.text = reader.result;
    }
  }

  onEdit() {
    this.isDisabled = false;
  }

  onSave() {
    this.isDisabled = true;
  }

  onDiscard() {
    this.isDisabled = true;
  }
}
