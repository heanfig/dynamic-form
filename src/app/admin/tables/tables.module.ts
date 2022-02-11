import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables/tables.component';
import { DataService } from './data.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderModule } from 'src/app/shared/dynamic-form-builder/dynamic-form-builder.module';
import { DepartmentsComponent } from './departments/departments.component';
import { CompaniesComponent } from './companies/companies.component';
import { CitiesComponent } from './cities/cities.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    DynamicFormBuilderModule
  ],
  declarations: [TablesComponent, DepartmentsComponent, CompaniesComponent, CitiesComponent],
  providers: [DataService]
})
export class TablesModule {}
