import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServices } from '../../assets/services';
import {first, takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../assets/types';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  public testList: Types.ITestList[];
  public questionPaper: Types.IQuestionPaper[];

  constructor(private router: Router,
              private _helper: HelperServices) { }

  public ngOnInit() {
    this._helper.getAllTest("5e10577a937042241d3d62bc", "5e107e21d3035635a800baa0")
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((response: Types.ITestListDetail) => {
        this.testList = response.TestList;
    });
  }

  public startTest(test: Types.ITestList){
  this.router.navigate(['/test', test.id]);
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
