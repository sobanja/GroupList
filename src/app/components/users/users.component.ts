import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() nicknames: string[] = [];

  // getDisplayedNicknames(): string[] {
  //   if (this.nicknames.length <= 4) {
  //     return this.nicknames;
  //   } else {
  //     return this.nicknames.slice(0, 4).concat(['+5']);
  //   }
  // }
}
