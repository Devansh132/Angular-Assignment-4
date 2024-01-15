import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-example',
  templateUrl: './shadow-example.component.html',
  styleUrls: ['./shadow-example.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom, // Use Shadow DOM encapsulation
})
export class ShadowExampleComponent {
  constructor(){
    console.log('ShadowDom - Working');
  }
}
