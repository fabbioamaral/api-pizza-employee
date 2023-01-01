import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from './models/employee.model';

const abc: Employee[] = [
  {
    id: 1,
    fullName: 'asdas sadasda',
    role: 'adasd',
    salary: 1234,
    cellphone: "3123123",
    address: "sadasd sadsadas",
    personalPhoto: ''
  }
]


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] | undefined;
  displayedColumns: string[] = ['fullName', 'role', 'salary', 'cellphone', 'address', 'action'];
  dataSource: any;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  private retrieveEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result?.employees;
      console.log(this.employees);
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abc() {
    console.log('oi');
  }
}
