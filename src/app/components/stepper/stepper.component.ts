import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  constructor(public steps: Array<string>) {
    this.activeStep = steps[0];
  }
  @Input() stepper: any;
  activeStep: string;
  isActive(step: any) {
    return step === this.activeStep;
  }
  isCompleted(index: number) {
    return index < this.stepper.indexOf(this.activeStep);
  }
  next() {
    this.stepper.indexOf(this.activeStep) + 1;
  }
  back() {

  }
}

// export class Steps {
//   public static TYPE: Steps = new Steps('Type');
//   public static DETAILS: Steps = new Steps('Details');
//   public static CONTENT: Steps = new Steps('Content');
//   public static values(): Steps[] {
//     return [
//       Steps.TYPE,
//       Steps.DETAILS,
//       Steps.CONTENT,
//     ]
//   }
//   constructor(public name: string, public action: string = '') {}
// }
