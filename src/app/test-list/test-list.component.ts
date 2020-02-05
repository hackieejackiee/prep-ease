import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperServices } from '../../assets/services';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../assets/types';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  public test: string;
  public questionPaper: Types.IQuestionPaper[];

  constructor(private _helper: HelperServices,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {this.test = params.testId}
      
      );

    this._helper.getQuestionPaper(this.test)
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((response: Types.IQuestionPaperDetail) => {
        this.questionPaper = response.questionsList;
      });
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
