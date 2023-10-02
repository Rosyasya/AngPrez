import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() width: string = '100%';
  @Input() height: string;
  @Input() isDisabled: boolean = false;
  @Input() name: string = '';
  @Output() imageChange = new EventEmitter<string>();
  img: any = '';

  uploadImage(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.img = reader.result
    }
  }
}
