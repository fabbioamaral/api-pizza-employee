import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  credentialsForm: any;
  hide: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') && this.password.touched ? 'You must enter a value' : '';
  }

  login() {
    if (this.credentialsForm.invalid) return;
    const email = this.credentialsForm.value.email as string;
    const password = this.credentialsForm.value.password as string;
  
    this.authService.login(email, password).subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }

  private initForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.credentialsForm = new FormGroup({
      email: this.email,
      password: this.password
    });
    this.hide = true;
  }

}
