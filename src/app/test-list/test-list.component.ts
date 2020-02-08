import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperServices } from '../../assets/services';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../assets/types';
import { element } from 'protractor';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  // public test: string;
  public questionPaper: Types.IQuestionPaper[];
  public question: Types.IQuestionPaper;
  public submitAnswer: Types.ISubmitAnswer;
  public answersList: Types.ISavedAnswer[] = [];
  public test_id: string;
  public student_Id: string;
  public question_id: string;
  public answer: string;
  public questionNumber: number;


  constructor(private _helper: HelperServices,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.test_id = params.testId
    });
    this.student_Id = 'jhs9fydsy234234gsdbuuis';
    this._helper.getQuestionPaper('5e3d92eaa97d2a1fddc28189')
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((response: Types.IQuestionPaperDetail) => {
        this.questionPaper = response.questionsList;
        this.questionNumber = 0;
        this.question = this.questionPaper[this.questionNumber];
      });
  }

  public displayQuestion(i: number) {
    this.questionNumber = i;
    this.question = this.questionPaper[i];
    this.answer = this.question.selectedOption;
    // this.question_id = this.question.question_id;
  }

  public getOption(event) {
    console.log(event);
    this.answer = event.target.value;
    // this.answersList ={
    //   answer: this.answer,
    //   question_id: this.question_id
    // };
  }

  public savedQuestions(event: any) {
    console.log(event);
    if (this.answer) {
      if (!(!!this.question.selectedOption)) {
        this.answersList.push({
          question_id: this.question.question_id,
          answer: this.answer
        });
      }
      else{ 
        const index = this.answersList.indexOf(this.answersList.find(elem=> elem.question_id === this.question.question_id));
        this.answersList[index].answer = this.answer;
      }
      this.questionPaper[this.questionNumber].selectedOption = this.answer;
      this.nextQuestion();
    }
    else {
      return;
    }
  }
  public nextQuestion() {
    if (this.questionPaper.length === (this.questionNumber + 1)) {
      this.questionNumber = -1;
    }
    this.questionNumber = this.questionNumber + 1;
    this.question = this.questionPaper[this.questionNumber];
    this.answer = this.question.selectedOption;
  }

  public submitPaper() {
    this.submitAnswer = {
      student_Id: this.student_Id,
      test_id: this.test_id,
      answersList: this.answersList
    };
  }
  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
