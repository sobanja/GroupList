import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  listTitle: string = '';
  @Input()
  listDescription: string = '';
}
