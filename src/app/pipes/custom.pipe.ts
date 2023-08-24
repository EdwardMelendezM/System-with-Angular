import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customPipe'
})

export class CustomPipe implements PipeTransform {
  transform(value: any, toUpper:boolean = false): any {
    return toUpper ? value.toUpperCase() : value.toLowerCase()
  }
}
