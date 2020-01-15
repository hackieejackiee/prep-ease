import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperServices } from '../../../assets/services';
import {first, takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../../assets/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  
  public username: string = '';
  public password: string = '';
  public name: string = '';
  public phoneno!: number;
  
  public parentFirstName: string = '';

  public allInstitutes: Types.IInstitutes;
  
  public showSignup: boolean = false;
  public showSignin: boolean = true;
  public formNavigate: string = 'personal';
  // window: any;
  constructor(
    private _helper: HelperServices
    ) { }

  public ngOnInit() {
    this._helper.getAllInstitutes()
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((response: Types.IGetAllInstitutes) => {
        this.allInstitutes = response.Institutes;
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
    if(!this.password){
      return;
    }
    console.log(this.username, this.password);
  }

  public onFormNavigation(navHeader: string){
    this.formNavigate = navHeader;
  }

  public ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
