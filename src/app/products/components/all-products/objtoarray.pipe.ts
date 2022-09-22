import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'objtoarray' })
export class objtoarraypipe implements PipeTransform {
  transform(object: any = []): any {
    return Object.values(object);
  }
}
