import { Component } from '@angular/core';
import { ToDoService} from '../shared/to-do.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  


  constructor(private service: ToDoService) {
    this.service.addTask('apprendre service');
  }

 
    
  }

