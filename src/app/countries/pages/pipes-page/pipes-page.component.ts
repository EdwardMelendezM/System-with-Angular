import { Component } from '@angular/core';
import {Todo} from "../../interfaces/list-todo.interface";

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
})
export class PipesPageComponent {
  name:string = "Raul"
  capital:number = 984654518

  lisTodo : Todo[] = [
    {
      id:'1',
      name:"Juan",
      age:55
    },
    {
      id:'2',
      name:"Maria",
      age:11
    },
    {
      id:'3',
      name:"Pedro",
      age:88
    }
  ]

}
