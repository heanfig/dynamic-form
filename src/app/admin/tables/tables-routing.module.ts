import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CompaniesComponent } from './companies/companies.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
