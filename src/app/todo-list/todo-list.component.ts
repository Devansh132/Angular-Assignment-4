import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,   // View encapsulation set to Emulated
})
export class TodoListComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() todos: { text: string; completed: boolean }[] = [];  // Input property to receive todos from parent component
  newTodo: string = '';

  constructor() {
    console.log('TodoListComponent - constructor');
  }

  ngOnChanges() {
    console.log('TodoListComponent - ngOnChanges');
  }

  ngOnInit() {
    console.log('TodoListComponent - ngOnInit');
  }

  ngDoCheck() {
    console.log('TodoListComponent - ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('TodoListComponent - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('TodoListComponent - ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('TodoListComponent - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('TodoListComponent - ngAfterContentChecked');
  }

  ngOnDestroy() {
    console.log('TodoListComponent - ngOnDestroy');
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo.trim(), completed: false });  // Add new todo
      this.newTodo = '';  // Clear the new todo input
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);  // Remove todo from list based on its index
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;  // Toggle completed status
  }
}
