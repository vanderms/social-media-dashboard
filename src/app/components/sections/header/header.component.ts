import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-header-section',
  templateUrl: './header.component.html',
})
export class HeaderSectionComponent {
  @Input() theme: Theme = Theme.light;
  @Output() toggleTheme: EventEmitter<any> = new EventEmitter();

  onClick() {
    console.log('hi!');    
    this.toggleTheme.emit();
  }

  isDark() {
    return this.theme === Theme.dark;
  }
}
