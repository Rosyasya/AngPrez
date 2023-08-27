import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  constructor(private _http: HttpClient) {
  }

  @Input() img: string = '';
  @Output() imageChange = new EventEmitter<string>();
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '';
  @Input() isDisabled: boolean = false;
  @Input() name: string = '';

  uploadImage(e: any) {
    if(e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any) => {
        this.img = event.target.result;
      }
    }
    }
}
