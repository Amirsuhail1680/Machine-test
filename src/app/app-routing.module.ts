import { ProfessionalComponent } from './professional/professional.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'details', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'sidebar', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: 'personal', component: PersonalInfoComponent, canActivate: [AuthGuard] },
  { path: 'professional', component: ProfessionalComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
