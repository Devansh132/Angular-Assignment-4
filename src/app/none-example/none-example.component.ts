import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-example',
  template: '<div class="item"><p class="example-class">{{ message }}</p></div>', // Component template
  styleUrls: ['./none-example.component.css'],
  encapsulation: ViewEncapsulation.None,  // Disable view encapsulation
})
export class NoneExampleComponent {
  message: string = 'Good Morning dear Nasher! Have a productive day...';
  constructor(){
    console.log('None - Working');
    
  }
}
