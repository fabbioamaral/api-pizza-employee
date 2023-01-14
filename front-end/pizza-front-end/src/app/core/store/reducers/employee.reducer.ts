import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/features/employees/models/employee.model';
import { retrieveEmployeeInfo, saveEmployeeInfo, resetEmployeeInfo } from '../actions/employee.actions';

export const initialState: Employee = {
    id: 0,
    fullName: '',
    role: '',
    salary: 0,
    cellphone: '',
    address: '',
    personalPhoto: ''
};

export const employeeReducer = createReducer(
  initialState,
  on(retrieveEmployeeInfo, state => state ),
  on(saveEmployeeInfo, (state, { employee }) => ({
    id: employee.id,
    fullName: employee.fullName,
    role: employee.role,
    salary: employee.salary,
    cellphone: employee.cellphone,
    address: employee.address,
    personalPhoto: employee.personalPhoto
  })),
  on(resetEmployeeInfo, (state) => ({
    id: 0,
    fullName: '',
    role: '',
    salary: 0,
    cellphone: '',
    address: '',
    personalPhoto: ''
  }))
);
