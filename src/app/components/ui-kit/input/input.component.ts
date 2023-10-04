import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() icon?: string;
  @Input() width: string = '100%';
  @Input() label?: string;
  @Input() isDisabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;
  @Input() value?: string = '';
  @Output() valueChange = new EventEmitter<string>();

  handleInput(event: any){
    this.valueChange.emit(event.target.value);
  }
}
