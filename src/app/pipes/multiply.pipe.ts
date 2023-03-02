import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'multi'
})

export class MultiplyPipe implements PipeTransform{
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }
}
