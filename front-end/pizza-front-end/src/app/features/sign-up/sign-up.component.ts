import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService, TYPE_SNACK } from 'src/app/core/services/message.service';

export default class CustomValidators {
  static match(controlName: string, matchControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const matchControl = controls.get(matchControlName);

      if (!matchControl?.errors && control?.value !== matchControl?.value) {
        matchControl?.setErrors({
          matching: true
        });
        return { matching: true };
      }
      return null;
    };
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  signupForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  signup() {
    if (this.signupForm.invalid) return;

    const email = this.signupForm.value.email as string;
    const password = this.signupForm.value.password as string;
    this.authService.signup(email, password).subscribe(() => {
      this.messageService.displaySnackBar('User created successfully!', TYPE_SNACK.success);
      this.router.navigateByUrl('');
    },
    err => {
      this.messageService.displaySnackBar(`Error. ${err.message}`, TYPE_SNACK.error);
    });
  }

  cancel() {
    this.router.navigateByUrl('');
  }

  private initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validators: [CustomValidators.match('password', 'confirmPassword')] });
  }
}
