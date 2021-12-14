import { Component, Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentinfoComponent } from './components/documentinfo/documentinfo.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ProfileupdateComponent } from './components/profile/profileupdate/profileupdate.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';





const routes: Routes = [
{  path: "", component: HomeComponent},
{  path: "info", component: InfoComponent},
{  path: "search", component: SearchComponent},
{  path: "docinfo", component: DocumentinfoComponent},
{  path: "pdfview", component: PdfviewComponent},
{  path: "login", component: LoginComponent},
{  path: "signup", component: SignupComponent},
{  path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
{  path: `profile/:uid`, component: ProfileComponent, canActivate: [AuthGuard]},
{  path: "profile/:uid/update", component: ProfileupdateComponent, canActivate: [AuthGuard]},
{  path: "dashboard/:uid/admin", component: AdminComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
