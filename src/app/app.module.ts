import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderSectionComponent } from './components/sections/header/header.component';

import { AppComponent } from './app.component';
import { StatsSectionComponent } from './components/sections/stats/stats.component';
import { StatsCardComponent } from './components/cards/stats-card/stats-card.component';

@NgModule({
  declarations: [AppComponent, HeaderSectionComponent, StatsSectionComponent, StatsCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
