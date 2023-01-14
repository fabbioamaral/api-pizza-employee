import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EmployeesComponent, AddEditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
