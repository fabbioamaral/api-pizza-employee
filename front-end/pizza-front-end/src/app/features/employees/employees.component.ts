import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from './models/employee.model';
import { Store } from '@ngrx/store';
import { saveEmployeeInfo } from 'src/app/core/store/actions/employee.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { MessageService, TYPE_SNACK } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent extends BaseComponent implements OnInit {
  employees: Employee[] | undefined;
  displayedColumns = ['fullName', 'role', 'salary', 'cellphone', 'address', 'action'];
  dataSource: any;

  constructor(
    private employeeService: EmployeeService,
    private store: Store,
    private router: Router,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  addEmployee() {
    this.router.navigateByUrl('/employees/add-employee');
  }
  
  goToEditEmployee(employee: Employee) {
    this.store.dispatch(saveEmployeeInfo({employee}));
    this.router.navigateByUrl('/employees/edit-employee');
  }
  
  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.retrieveEmployees();
        this.messageService.displaySnackBar('Employee deleted successfully!', TYPE_SNACK.success);
      },
      err => {
        this.messageService.displaySnackBar(`Error on deleting employee. ${err.error.message}`, TYPE_SNACK.error);
      });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, employee: Employee): void {
    const dialog = this.dialog.open(DialogComponent, {
      data: {title: 'Delete Employee', text: 'Are you sure you want to delete this employee?'},
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialog.afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result === 'ok') {
          this.deleteEmployee(employee.id as number);
        }
      });
  } 

  back() {
    this.router.navigateByUrl('/home');
  }

  private retrieveEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result?.employees;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }
}
