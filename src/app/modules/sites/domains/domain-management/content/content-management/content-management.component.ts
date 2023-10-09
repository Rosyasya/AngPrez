import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Content} from "./content";

@Component({
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activeStep = this.stepper[0];
    this.id = activatedRoute.snapshot.params['id'];
  }
  content: Content = {
    id: 0,
    typeTitle: '',
    type: '',
    link: '',
    img: '',
    category: '',
    author: '',
    tag: [],
    landing: false,
    trending: false,
    description: '',
  }
  id: number;
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
  typeHandle(event: any) {
    this.content.type = event.type;
    this.content.typeTitle = event.typeTitle;
  }
  detailsHandle(event: any) {
    console.log(event);
  }
}
