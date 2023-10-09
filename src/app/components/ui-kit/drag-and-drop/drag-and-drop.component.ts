import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  slides: Array<any> = ['test1', 'test2'];
  slideID: any;
  isFavorite() {
    return false;
  }
  onDragStart(event: any, slide: any) {
    event.stopPropagation();
    console.log('start', event, slide);
    this.slideID = slide;
  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onDrop(event: any, slide: any) {
    const dragIndex = this.slides.indexOf(this.slideID);
    const dropIndex = parseInt(event.target.id);
    const dropSlide = this.slides[dropIndex];
    this.slides[dragIndex] = dropSlide;
    this.slides[dropIndex] = this.slideID;
    this.slideID = undefined;
    console.log('drop', event, slide);
  }
}
