import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() img: string = 'assets/images/bell.png';
  @Input() width: string = '100%';
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;
}
