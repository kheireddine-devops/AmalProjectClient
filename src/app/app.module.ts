import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MAT_DATE_FORMATS, NativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NativeDateModule
  ],

  providers: [
    // {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: ['l', 'LL'],
    //     },
    //     display: {
    //       dateInput: 'L',
    //       monthYearLabel: 'MMM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //     },
    //   },
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
