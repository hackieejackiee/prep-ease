import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServices } from '../../assets/services';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../assets/types';

@Injectable()
export class AuthGaurdComponent implements OnDestroy {

    private unsubscribe$ = new Subject();

    //   public testList: Types.ITestList[];
    //   public questionPaper: Types.IQuestionPaper[];

    constructor(private _helper: HelperServices) { }


    public ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
