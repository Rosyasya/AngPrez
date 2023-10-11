import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent {
  @Input() width?: string = '100%';
  @Input() options: Array<any> = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() values: Array<string> = [];
  open: boolean = false;
  selectOption(option: any) {
    this.placeholder = '';
    this.values.includes(option.name) ? null : this.values.push(option.name);
  }
  removeOption(option: any) {
    this.values.filter((item: any) => item !== option.name);
  }
}
