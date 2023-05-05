import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private taskList: string[] = []

  constructor() { }

  public addTask(newTask: string): void {
    this.taskList.push(newTask);
   
  }

  public getTaskList(): string[] {
    return this.taskList
  }
    
}

