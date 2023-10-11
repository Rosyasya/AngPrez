import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Content} from "./content";
import {StepperService} from "../../../../../../application/api/stepper.service";

@Component({
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }
  content: Content = {
    id: 0,
    typeTitle: '',
    type: '',
    link: '',
    detailsImg: '',
    category: '',
    author: '',
    tag: [],
    landing: false,
    trending: false,
    description: '',
    contentTitle: '',
    media: '',
    mediaCaption: '',
    contentAbove: '',
    contentBelow: '',
    status: '',
    slides: [],
  }
  id: number;
  stepper: StepperService = new StepperService(['Type', 'Details', 'Content']);
  getAllContent() {
    console.log(this.content);
  }
}
