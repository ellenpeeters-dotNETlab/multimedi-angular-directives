import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradeComponent } from './grade/grade.component';
import { HolidayComponent } from './holiday/holiday.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
