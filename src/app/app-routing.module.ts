import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentinfoComponent } from './components/documentinfo/documentinfo.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagersinfoComponent } from './components/info/managersinfo/managersinfo.component';
import { ReadersinfoComponent } from './components/info/readersinfo/readersinfo.component';
import { DevinfoComponent } from './components/info/devinfo/devinfo.component';

import { AuthGuard } from './services/auth.guard';
import { TestpageComponent } from './components/testpage/testpage.component';

const routes: Routes = [
{  path: "", component: HomeComponent},
{  path: "info", component: InfoComponent},
{  path: "search", component: SearchComponent},
{  path: "docinfo", component: DocumentinfoComponent},
{  path: "pdfview", component: PdfviewComponent},
{  path: "login", component: LoginComponent},
{  path: "signup", component: SignupComponent},
{  path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
{  path: "info/readersinfo", component: ReadersinfoComponent, canActivate: [AuthGuard]},
{  path: "info/managersinfo", component: ManagersinfoComponent, canActivate: [AuthGuard]},
{  path: "info/devinfo", component: DevinfoComponent, canActivate: [AuthGuard]},
{ path: "test/testpage", component: TestpageComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
