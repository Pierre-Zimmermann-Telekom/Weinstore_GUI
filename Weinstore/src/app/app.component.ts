import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WinelistComponent } from './winelist/winelist.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weinstore';
}
