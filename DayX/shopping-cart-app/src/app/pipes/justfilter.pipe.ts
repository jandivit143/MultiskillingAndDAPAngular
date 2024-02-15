// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'justfilter'
// })
// export class JustfilterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'justfilter'
})
export class JustfilterPipe implements PipeTransform {

  transform(value: string[], args=""): string[] {
    if(value){
      return value.filter(nm => nm.toLowerCase().startsWith(args.toLowerCase()));
    }else{
      return [];
    }
  }

}
