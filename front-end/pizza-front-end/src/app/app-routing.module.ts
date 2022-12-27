import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('../app/features/login/login.module').then(m => m.LoginModule)
  },
  { path: 'home',
    loadChildren: () => import('../app/features/homepage/homepage.module').then(m => m.HomepageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }