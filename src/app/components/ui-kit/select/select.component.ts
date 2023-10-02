import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() width?: string = '100%';
  @Input() options: Array<any>;
  @Input() showSearch: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  open: boolean = false;

  selectOption(option: any) {
    this.open = !this.open;
    this.placeholder = '';
    this.value = option.name;
    this.valueChange.emit(option.name);
  }

  test(event: any) {
    console.log(event);
  }
}
