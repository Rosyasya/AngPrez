import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  title: string = '';
  type: string = '';
  @Output() typeHandle = new EventEmitter<{type: string, typeTitle: string }>();
  cardHandle(type: string) {
    this.typeHandle.emit({type: type, typeTitle: this.title});
  }
}
