import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAttendanceComponent,
    UserAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
