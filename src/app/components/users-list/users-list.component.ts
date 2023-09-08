import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() nicknames: string[] = [];

  getLimitedUsers(): string[] {
    if (this.nicknames.length > 4) {
      const limitedUsers = this.nicknames.slice(0, 4);
      limitedUsers.push(`+${this.nicknames.length - 4}`);
      return limitedUsers;
    } else {
      return this.nicknames;
    }
  }

}
