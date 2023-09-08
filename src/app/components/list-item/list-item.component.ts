import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
