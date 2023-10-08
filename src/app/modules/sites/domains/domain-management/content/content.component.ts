import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StepperComponent} from "../../../../../components/stepper/stepper.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }
  id: number;
  name: string = '{{Site name}}';
  content: string = 'Create content';
  stepper: StepperComponent = new StepperComponent(["Type", "Details", "Content"]);
}
