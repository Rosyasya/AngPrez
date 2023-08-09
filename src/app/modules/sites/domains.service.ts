import { Injectable } from '@angular/core';
import {IDomains} from "./domains";

@Injectable({
  providedIn: 'root'
})
export class DomainsService {
  info: Array<IDomains> = [
    {
      title: 'Card 1',
      img: 'test 1',
      domain: 'test domain 1',
      theme: 'test theme 1',
      id: 1,
    },
    {
      title: 'Card 2',
      img: 'test 2',
      domain: 'test domain 2',
      theme: 'test theme 2',
      id: 2,
    },
    {
      title: 'Card 3',
      img: 'test 3',
      domain: 'test domain 3',
      theme: 'test theme 3',
      id: 3,
    },
    {
      title: 'Card 4',
      img: 'test 4',
      domain: 'test domain 4',
      theme: 'test theme 4',
      id: 4,
    },
  ];

  constructor() { }
}
