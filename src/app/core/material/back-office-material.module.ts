import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {FrontOfficeModule} from "../../front-office/front-office.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    imports: [
      MatTableModule,
      MatListModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      FrontOfficeModule,
      MatGridListModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule
    ],
    exports: [
      MatTableModule,
      MatListModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      FrontOfficeModule,
      MatGridListModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule
    ]
})
export class BackOfficeMaterialModule { }
