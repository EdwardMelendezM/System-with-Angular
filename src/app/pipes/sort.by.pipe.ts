import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../countries/interfaces/list-todo.interface";

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(todo: Todo[], sortBy?: keyof Todo | ''): Todo[] {
    switch (sortBy){
        case 'name':
          return todo.sort((a,b)=>a.name>b.name ? 1 : -1);
        case 'age':
          return todo.sort((a,b)=>a.age>b.age ? 1 : -1);
        default:
          return todo;
    }
  }
}
