import { Component } from '@angular/core';
import { Theme } from './models/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme: Theme = Theme.dark;

  toggleTheme() {
    this.theme = this.theme === Theme.light ? Theme.dark : Theme.light;
  }
}
