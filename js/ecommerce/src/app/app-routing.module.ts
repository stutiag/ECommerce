import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './ecommerce/logout/logout.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AuthGaurdService } from './ecommerce/services/auth-guard.service';



const routes: Routes= [
  
  {path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
]


@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
