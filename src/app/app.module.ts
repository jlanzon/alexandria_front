import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { DocumentinfoComponent } from './components/documentinfo/documentinfo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';

//firestore data
//imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { environment } from 'src/environments/environment';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ManagersinfoComponent } from './components/info/managersinfo/managersinfo.component';
import { ReadersinfoComponent } from './components/info/readersinfo/readersinfo.component';
import { DevinfoComponent } from './components/info/devinfo/devinfo.component';
import { TestpageComponent } from './components/testpage/testpage.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ProfileupdateComponent } from './components/profile/profileupdate/profileupdate.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ReaderComponent } from './components/dashboard/reader/reader.component';
//config



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    InfoComponent,
    DocumentinfoComponent,
    PdfviewComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    ToolbarComponent,
    ManagersinfoComponent,
    ReadersinfoComponent,
    DevinfoComponent,
    TestpageComponent,
    ProfileComponent,
    ProfileupdateComponent,
    AdminComponent,
    ReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCommonModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatChipsModule,
    MatTableModule,
    //firestore
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
    //end

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
