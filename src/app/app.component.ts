import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ass_2';
  todos: { text: string; completed: boolean }[] = [
    { text: 'Learn Angular', completed: false }, // Initialize list 
  ];
}
