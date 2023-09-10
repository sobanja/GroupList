import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from "../user/user.component";
import { UserSlicerPipe } from "../../pipes/user-slicer.pipe";

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    imports: [CommonModule, UserComponent, UserSlicerPipe]
})
export class UsersListComponent {
  @Input() nicknames: string[] = [];


}
