import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
