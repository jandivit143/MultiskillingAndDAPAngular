// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'caption'
// })
// export class CaptionPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? 'Short Date!' : 'Full Date!';
  }

}
