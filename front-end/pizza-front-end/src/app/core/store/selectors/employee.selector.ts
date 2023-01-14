import { createFeatureSelector } from '@ngrx/store';
import { Employee } from 'src/app/features/employees/models/employee.model';

export const selectEmployee = createFeatureSelector<Employee>('employee');