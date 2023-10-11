import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  @Input() slides: Array<any> = [];
  slideID: any;
  activeSlide: any;
  favoriteSlide: any;
  setActive(slide: any) {
    this.activeSlide = slide;
  }
  setFavorite(slide: any) {
    this.favoriteSlide = slide;
  }
  onDragStart(event: any, slide: any) {
    event.stopPropagation();
    console.log('start', event, slide);
    this.slideID = slide;
  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onDrop(event: any) {
    if(this.slideID !== undefined) {
      const dragIndex = this.slides.indexOf(this.slideID);
      const dropIndex = parseInt(event.target.offsetParent.id);
      const dropSlide = this.slides[dropIndex];
      this.slides[dragIndex] = dropSlide;
      this.slides[dropIndex] = this.slideID;
      this.slideID = undefined;
    }
  }

  uploadImage(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const test: FileList = event.target.files;

    for(let i = 0; i < test.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(test[i]);
      reader.onloadend = () => {
        this.slides.push(reader.result);
      }
    }
  }
}
