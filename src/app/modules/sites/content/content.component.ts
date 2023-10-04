import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      })
  }

  id: number;
}
