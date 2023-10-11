import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StepperService} from "../../application/api/stepper.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent{
  @Input() stepper: StepperService;
  @Output() stepChange = new EventEmitter<string>();
  @Input() activeStep: string;
}
