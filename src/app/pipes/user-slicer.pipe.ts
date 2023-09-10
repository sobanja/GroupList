import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSlicer',
  standalone: true
})
export class UserSlicerPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string[] {
    if (value.length > 4) {
      const limitedUsers = value.slice(0, 4);
      limitedUsers.push(`+${value.length - 4}`);
      return limitedUsers;
    } else {
      return value;
    }
  }
}
