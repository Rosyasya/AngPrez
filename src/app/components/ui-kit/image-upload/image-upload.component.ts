import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  @Input() img: string = '';
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '';
  @Input() isDisabled: boolean = false;

}
