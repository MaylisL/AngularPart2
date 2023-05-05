import { Component } from '@angular/core';
import { ToDoService } from '../shared/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  taskList: string[] = [];
  constructor(private service: ToDoService) {
    this.taskList = this.service.getTaskList()
  }
}
