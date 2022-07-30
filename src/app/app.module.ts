import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderSectionComponent } from './components/sections/header/header.component';

import { AppComponent } from './app.component';
import { StatsSectionComponent } from './components/sections/stats/stats.component';
import { StatsCardComponent } from './components/cards/stats-card/stats-card.component';
import { OverviewComponent } from './components/sections/overview/overview.component';
import { OverviewCardComponent } from './components/cards/overview-card/overview-card.component';

@NgModule({
  declarations: [AppComponent, HeaderSectionComponent, StatsSectionComponent, StatsCardComponent, OverviewComponent, OverviewCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
