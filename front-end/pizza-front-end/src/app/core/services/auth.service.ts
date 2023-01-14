import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/features/login/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/auth';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, { email, password });
  }

  logout() {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      this.router.navigateByUrl('');
    }
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.url}/signup`, { email, password, accessType: 'user' });
  }
}
