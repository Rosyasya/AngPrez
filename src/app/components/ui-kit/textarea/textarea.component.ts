import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() width: string = '100%';
  @Input() height: string = '108px';
  @Input() label?: string = '';
  @Input() placeholder?: string = 'Type here...';
  @Input() limit: number;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  handleInput(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.valueChange.emit(event.target.value);
  }

  handleLimit(event: any) {
    if ((this.limit && this.value.length >= this.limit) && event.key !== "Backspace") event.preventDefault();
  }
}
