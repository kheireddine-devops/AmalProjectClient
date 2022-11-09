
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, FormControl, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ListeTutorielsComponent } from './liste-tutoriels/liste-tutoriels.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogComponentComponent } from './add-dialog-component/add-dialog-component.component';
import { KPIformationComponent } from './kpiformation/kpiformation.component';






@NgModule({
  declarations: [
    
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
    GestionFormationsComponent,
    ListeFormationComponent,
    ListeTutorielsComponent, 
    AddDialogComponentComponent, KPIformationComponent,
   KPIformationComponent
  

  ],
  imports: [
  
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    ObserversModule,
    A11yModule,
    MatChipsModule,
    RouterModule,
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
   


    
    
    
  ]
})
export class BackOfficeModule { }
