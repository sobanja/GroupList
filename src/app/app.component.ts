import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list-item/list-item.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, WrapperComponent, UserComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = "Bonifico Italia";
 description = "10 € - 1500 €";
 users = ['AL', 'GP', 'DZ', 'BJ', 'DD'];

}
