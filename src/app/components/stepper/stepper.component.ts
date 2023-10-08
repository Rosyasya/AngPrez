import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent{
  @Input() stepper: Array<string> = [];
  @Output() stepChange = new EventEmitter<string>();
  @Input() activeStep: string;
  isActive(step: any) {
    return step === this.activeStep;
  }
  isCompleted(index: number) {
    return index < this.stepper.indexOf(this.activeStep);
  }
  isLastStep(index: number) {
    return (this.stepper.length - 1) !== index;
  }
}
