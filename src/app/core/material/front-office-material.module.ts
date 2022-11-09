import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    imports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatIconModule,
      MatRadioModule,
      MatToolbarModule,
      MatDividerModule,
      MatSelectModule,
      MatGridListModule,
    ],
    exports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatIconModule,
      MatRadioModule,
      MatToolbarModule,
      MatDividerModule,
      MatSelectModule,
      MatGridListModule,
    ]
})
export class FrontOfficeMaterialModule { }
