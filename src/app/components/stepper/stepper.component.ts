import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  steps = Steps.values();
}

export class Steps {
  public static TYPE: Steps = new Steps('Type');
  public static DETAILS: Steps = new Steps('Details');
  public static CONTENT: Steps = new Steps('Content');
  public static values(): Steps[] {
    return [
      Steps.TYPE,
      Steps.DETAILS,
      Steps.CONTENT,
    ]
  }
  constructor(public name: string, public action: string = '') {}
}
