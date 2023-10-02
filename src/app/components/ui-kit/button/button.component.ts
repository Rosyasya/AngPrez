import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title?: string;
  @Input() size?: string = '14px';
  @Input() isReversed?: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() type: string;
  @Input() icon?: string;
  @Input() iconSize?: string;
  @Input() iconColor?: string = 'black';
  @Input() link?: any;
  @Input() class?: string;
  @Output() callback = new EventEmitter();

  onClick() {
    this.callback.emit();
  }
}
