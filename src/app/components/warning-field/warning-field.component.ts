import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-warning-field',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './warning-field.component.html',
  styleUrls: ['./warning-field.component.scss']
})
export class WarningFieldComponent {
  @Input() field: string = '';
  @Input() message: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
