import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() width: string = '100%';
  timeout: any;

  handleInput(event: any) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      console.log(event);
    }, 300)
  }
}
