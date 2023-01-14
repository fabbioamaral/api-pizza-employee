import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MessageService, TYPE_SNACK } from 'src/app/core/services/message.service';
import { selectEmployee } from 'src/app/core/store/selectors/employee.selector';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent extends BaseComponent implements OnInit {
  employeeForm: FormGroup | any;
  title = '';
  isAddEmployee: boolean | undefined;
  employee: Employee | any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.checkIsAddEmployee();
    this.initForm();
  }

  save() {
    let employee: Employee;
    if (this.employeeForm.valid) {
      if (this.isAddEmployee) {
        employee = this.employeeForm.value;
        this.registerNewEmployee(employee);
      } else {
        employee = {
          id: this.employee.id,
          ...this.employeeForm.value
        };
        this.updateEmployee(employee);
      }
    };
  }

  private registerNewEmployee(employee: Employee) {
    this.employeeService.registerNewEmployee(employee)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(result => {
        this.messageService.displaySnackBar('Employee registered successfully!', TYPE_SNACK.success);
        this.router.navigateByUrl('/employees');
      });
      
  }

  private updateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        this.messageService.displaySnackBar('Employee data updated successfully!', TYPE_SNACK.success);
        console.log(result);
        this.router.navigateByUrl('/employees');
      },
      err => {
        this.messageService.displaySnackBar('Error on updating employee data.', TYPE_SNACK.error);
      });
  }
  
  cancel() {
    this.router.navigateByUrl('/employees');
  }

  private initForm() {
    if (this.isAddEmployee) {
      this.employeeForm = this.formBuilder.group({
        fullName: ['', [Validators.required]],
        role: ['', [Validators.required]],
        salary: ['', [Validators.required]],
        cellphone: ['', [Validators.required]],
        address: ['', [Validators.required]]
      });
    } else {
      this.store.select(selectEmployee).subscribe((employee: Employee) => {
        this.employee = employee;
        this.employeeForm = this.formBuilder.group({
          fullName: [employee.fullName, [Validators.required]],
          role: [employee.role, [Validators.required]],
          salary: [employee.salary, [Validators.required]],
          cellphone: [employee.cellphone, [Validators.required]],
          address: [employee.address, [Validators.required]]
        });
      });
    }
  }

  private checkIsAddEmployee() {
    const url = this.router.url;
    if (url.substring(url.length - 13) === '/add-employee') {
      this.isAddEmployee = true;
      this.title = 'Add Employee';
    } else {
      this.isAddEmployee = false;
      this.title = 'Update Employee Data'
    }
    console.log(this.title);
  }

}
