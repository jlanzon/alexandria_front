import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentinfoComponent } from './components/documentinfo/documentinfo.component';
import { DocumentviewComponent } from './components/documentview/documentview.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
{  path: "", component: HomeComponent},
{  path: "info", component: InfoComponent},
{  path: "search", component: SearchComponent},
{  path: "docview", component: DocumentviewComponent},
{  path: "docinfo", component: DocumentinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
