import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderSectionComponent } from './components/sections/header/header.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
