import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {ImageFile} from "./image-file";

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
  @Input() name: string = '';
  @Output() dropFiles: EventEmitter<ImageFile[]> = new EventEmitter()
  @HostBinding('style.background') backgroundColor: any;

  @HostListener('dragover', ['$event']) public dragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.OVER;
  }

  @HostListener('dragleave', ['$event']) public dragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.DEFAULT;
  }

  @HostListener('drop', ['$event']) public drop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.DEFAULT;

    let fileList = event.dataTransfer.files;
    let files: ImageFile[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const url = window.URL.createObjectURL(file);
      files.push({file, url});
    }

    if (files.length > 0) {
      this.dropFiles.emit(files);
    }
  }

}

class DropColor {
  public static DEFAULT = new DropColor('#C6E4F1');
  public static OVER = new DropColor('#ACADAD');

  public static colors(): DropColor[] {
    return [
      DropColor.DEFAULT,
      DropColor.OVER,
    ]
  }

  constructor(color: string) {
  }
}
