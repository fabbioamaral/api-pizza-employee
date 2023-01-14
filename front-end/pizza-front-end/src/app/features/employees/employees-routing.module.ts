import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'add-employee',
    component: AddEditEmployeeComponent,
  },
  {
    path: 'edit-employee',
    component: AddEditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
