import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('../app/features/login/login.module').then(m => m.LoginModule)
  },
  { path: 'home',
    loadChildren: () => import('../app/features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  { path: 'signup',
    loadChildren: () => import('../app/features/sign-up/signup.module').then(m => m.SignupModule)
  },
  { path: 'employees',
    loadChildren: () => import('../app/features/employees/employees.module').then(m => m.EmployeesModule)
  },
  { path: 'orders',
    loadChildren: () => import('../app/features/orders/orders.module').then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }