import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, WrapperComponent, UsersComponent  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 items = [
  {title: 'Bonifico Italia', description: '10 e - 1500 e' },
  {title: 'Bonifico estero', description: '10 e - 2000 e'},
  {title: 'F24', description: '10 e - 2000 e'},
  {title: 'MAV', description: '10 e - 2000 e'},
  {title: '+2 servizi'}
 ];
  title: any;
}
