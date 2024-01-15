import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ShadowExampleComponent } from './shadow-example/shadow-example.component';
import { NoneExampleComponent } from './none-example/none-example.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, HighlightDirective, CustomPipe, ShadowExampleComponent, NoneExampleComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
