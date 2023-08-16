import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title?: string;
  @Input() img?: string;
  @Input() size: string = '14px';
  @Input() callback: any;
  @Input() isReversed: boolean = false;
  @Input() isDisabled?: boolean = false;
}
