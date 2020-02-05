import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperServices } from '../../../assets/services';
import {first, takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../../assets/types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  
  public username: string = '';
  public loginpassword: string = '';

  public firstname: string = '';
  public lastname: string = '';
  public email: string = '';
  public phoneno: number;
  public dob:Date;
  public password: string = '';
  public gender: string = '';
  public confirmPassword: string = '';

  public parentFirstName: string = '';
  public qualification: string = '';
  public parentEmail: string = '';
  public parentPhoneno: string = '';

  public class: string = '';
  public institute: string = '';
  public medium: string = '';
  public subject: string = '';

  public allInstitutes: Array<Types.IInstitutes>;
  public allClasses: Array<Types.IClasses>;
  
  public showSignup: boolean = false;
  public showSignin: boolean = true;
  public formNavigate: string = 'personal';
  public userType: string = '';

  constructor(
    private _helper: HelperServices,
    private _route: ActivatedRoute,
    private router: Router
    ) { }

  public ngOnInit() {
    this._route.params.subscribe(type => this.userType = type.id);
    console.log(this.userType);

    this._helper.getAllInstitutes()
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((instituteList: Types.IGetAllInstitutes) => {
        this.allInstitutes = instituteList.Institutes;
      });
    this._helper.getAllClasses()
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((classList: Types.IGetAllClasses) => {
        this.allClasses = classList.Classes;
      });
  }

  public onNavigate(component:string){
    if(component === 'signup'){
      this.showSignup = true;
      this.showSignin = false;
    }
    if(component === 'signin'){
      this.showSignin = true;
      this.showSignup = false;
    }
  }

  public onSignin(){
    if(!this.username){
        return;
    }
    if(!this.loginpassword){
      return;
    }
    console.log(this.username, this.password);
    if(this.userType === 'teacher'){
      this.router.navigate(['/dashboard']);
    }
    if(this.userType === 'student'){
      this.router.navigate(['/dashboard-student']);
    }
    // this.router.navigate(['/login', 'student']);
  }

  public onSignUp(){

  }

  public onFormNavigation(navHeader: string){
    this.formNavigate = navHeader;
  }

  public ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
