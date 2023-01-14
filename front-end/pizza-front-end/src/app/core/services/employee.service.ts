import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, GetEmployeeResponse, GetEmployeesResponse } from 'src/app/features/employees/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<GetEmployeesResponse>(`${this.url}employees`);
  }

  getEmployee(employeeId: number) {
    return this.http.get<GetEmployeeResponse>(`${this.url}employee/${employeeId}`);
  }

  registerNewEmployee(employee: Employee) {
    return this.http.post<GetEmployeeResponse>(`${this.url}employee/`, {
      fullName: employee.fullName,
      role: employee.role,
      salary: employee.salary,
      cellphone: employee.cellphone,
      personalPhoto: employee.personalPhoto,
      address: employee.address
    });
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.url}employee/${employee.id}`, employee);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(`${this.url}employee/${employeeId}`);
  }
}
