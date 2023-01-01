import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, GetEmployeeResponse } from 'src/app/features/employees/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<GetEmployeeResponse>(`${this.url}employees`);
  }

  getEmployee(employeeId: number) {

  }

  registerNewEmployee(employee: Employee) {

  }

  updateEmployee(employee: Employee) {

  }

  deleteEmployee(employeeId: number) {

  }
}
