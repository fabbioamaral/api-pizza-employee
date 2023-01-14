import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/features/employees/models/employee.model';

export const saveEmployeeInfo = createAction(
    '[Employee Info] Save employee information',
    props<{ employee: Employee }>()
);

export const retrieveEmployeeInfo = createAction(
    '[Employee Info] Retrieve employee information',
);

export const resetEmployeeInfo = createAction(
    '[Client Info] Reset employee information',
);