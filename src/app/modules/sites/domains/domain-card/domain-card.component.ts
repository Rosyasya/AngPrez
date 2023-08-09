import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent{
  constructor(private route: ActivatedRoute) {
  }
  @Input() title: string;
  @Input() img: string;
  @Input() domain: string;
  @Input() theme: string;
  @Input() id: number;

}
