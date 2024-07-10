import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

}
