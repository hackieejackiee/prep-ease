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

    this._helper.getQuestionPaper('5e3d92eaa97d2a1fddc28189')
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((response: Types.IQuestionPaperDetail) => {
        this.questionPaper = response.questionsList;
      });
  }

  public displayQuestion(){
    
  }
  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
