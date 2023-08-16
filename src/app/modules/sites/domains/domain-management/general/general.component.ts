import { Component } from '@angular/core';
import {ImageFile} from "../../../../../components/ui-kit/image-upload/image-file";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  isSaved: boolean = false;

  onSaveForm() {
    this.isSaved = true;
  }

  files: ImageFile[] = [];

  onDropFiles(files: ImageFile[]): void {
    this.files = [...this.files, ...files];
  }
}
