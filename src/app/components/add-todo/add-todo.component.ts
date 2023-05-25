import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter() 
  onSubmit() {
    if(!this.title) {
      alert("Please add an Item");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: this.title,
      active: true
    }
    this.todoAdd.emit(newTodo)
    this.title= "";
  }
}
