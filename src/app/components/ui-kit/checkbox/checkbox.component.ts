import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() title: string = '';
  @Output() checkedChange = new EventEmitter<boolean>();
  onChange(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.checkedChange.emit(event.target.checked);
  }
}
