import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './globalelems/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HelperServices } from '../assets/services';
import { GlobalConstants } from 'src/assets/const';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { SignupComponent } from './globalelems/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UpcomingTestsComponent} from './upcoming-tests/upcoming-tests.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { TestListComponent } from './test-list/test-list.component';
import { AuthGaurdComponent } from '../app/auth-gaurd/auth-gaurd.component';

const routes: Routes = [
  // {path: 'fgug', component: DashboardComponent},
  { path: '', component: LandingPageComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'dashboard',component: DashboardComponent},
  { path: 'dashboard-student',component: DashboardStudentComponent},
  { path: 'upcomingTests', component: UpcomingTestsComponent },
  { path: 'test/:testId', component: TestListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    SignupComponent,
    DashboardComponent,
    UpcomingTestsComponent,
    DashboardStudentComponent,
    TestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HelperServices,GlobalConstants,AuthGaurdComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
