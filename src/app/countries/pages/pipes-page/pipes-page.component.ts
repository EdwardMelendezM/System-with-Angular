import { Component } from '@angular/core';
import {Todo} from "../../interfaces/list-todo.interface";

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
})
export class PipesPageComponent {
  public name:string = "Raul"
  public capital:number = 984654518
  public orderBy? : keyof Todo | '' = ''

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
    },
    {
      id:'4',
      name:"Almiro",
      age:12
    }
  ]

  changeOrderBy(value: keyof Todo):void{
    this.orderBy=value
  }

}
