import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.activeStep = this.stepper[0];
  }
  id: number;
  name: string = '{{Site name}}';
  content: string = 'Create content';
  stepper: Array<string> = ['Type', 'Details', 'Content'];
  activeStep: string;

  getActiveStep(event: any) {
    this.activeStep = event;
  }
  next() {
    this.switchStep(+1);
  }
  back() {
    this.switchStep(-1);
  }
  switchStep(direction: number): void {
    let stepIndex = this.stepper.indexOf(this.activeStep);
    if (stepIndex >= 0 && stepIndex < this.stepper.length) {
      stepIndex += direction;
      this.activeStep = this.stepper[stepIndex];
    }
  }
  showNextButton():boolean {
    return this.stepper.indexOf(this.activeStep) < this.stepper.length - 1;
  }
  showBackButton():boolean {
    return this.stepper.indexOf(this.activeStep) > 0
  }
  showOptionButton():boolean {
    return this.stepper.indexOf(this.activeStep) === this.stepper.length - 1;
  }
}
