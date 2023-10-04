import { Injectable } from '@angular/core';
import {IDomains} from "./domains";

@Injectable({
  providedIn: 'root'
})
export class DomainsService {
  info: Array<IDomains> = [
    {
      title: '{Site name}',
      img: '',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 1,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 2,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 3,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 4,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 5,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 6,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 7,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 8,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 9,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 9,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 9,
    },
    {
      title: '{Site name}',
      img: 'test 1',
      domain: 'site.example.com',
      theme: 'name theme',
      id: 9,
    },
  ];

  constructor() { }
}
