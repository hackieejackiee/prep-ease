import { Component, OnInit, OnDestroy, Type } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HelperServices } from '../../assets/services';
import {first, takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Types from '../../assets/types';
import { GlobalConstants } from "../../assets/const";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  public navigate: string = 'createTest';

  public isTestDetailIncomplete: boolean = false;
  public isImageUploaded: boolean;

  public allInstitutes: Array<Types.IInstitutes>;
  public allClasses: Array<Types.IClasses>;
  public allSubjects: Array<Types.ISubjects>;
  public showSubjectDetails: boolean = true;
  public showAddQuestion: boolean = true;
  public showQuestionForm: boolean =false;
  public questionList: Types.IQuestionDetail[] = [];
  public questionPaper: Types.ITestPaperDetail;
  
  public title: string = '';
  public questionDesc: string = '';
  public startDate: string = '';
  public endDate: string = '';
  public subjectId: string = '';
  public classId: string = '';
  public instituteId: string = '';

  public question: string = '';
  public option1: string = '';
  public option2: string = '';
  public option3: string = '';
  public option4: string = '';
  public answer: string = '';
  public imgPath: string = '';
  public selectedFile: File;

  constructor(
    private _router: Router,
    private _helper: HelperServices,
    private _global: GlobalConstants
    ){}

  public ngOnInit() {
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
    this._helper.getAllSubjects()
    .pipe(first(), takeUntil(this.unsubscribe$))
    .subscribe((subjectList: Types.IGetAllSubjects) => {
      this.allSubjects = subjectList.Subjects;
    });
  }

  public navigateTo(type:string){
    this.navigate = type;
    }

  public onSubmitTestPaperDetail(){
    this.showSubjectDetails = false;
    this.isTestDetailIncomplete = false;
    console.log(this.title);
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.subjectId);
    console.log(this.classId);
    console.log(this.instituteId);
    console.log(this.questionDesc);
  }
  
    public onFileSelect(event: any){
      this.selectedFile = event.target.files[0];
      console.log(event);
    }
  
    public uploadImage(){
      const fd = new FormData();
      fd.append('photo', this.selectedFile, this.selectedFile.name);
      this._helper.uploadImage(fd)
      .pipe(first(), takeUntil(this.unsubscribe$))
      .subscribe((res: Types.IImageUploadResponse) => {
        if(res.success){
          this.isImageUploaded = true;
          this.imgPath = res.fileName;
          console.log(res);
        }
        else{
          this.isImageUploaded = false;
        }
      });
    }

    public onAddQuestion(){
      this.showQuestionForm = true;
      this.question = "";
      this.option1 = "";
      this.option2 = "";
      this.option3 = "";
      this.option4 = "";
      this.answer = "";
      this.imgPath = "";
      }

  public onAddQuestionDetail(){
    this.showQuestionForm = false;
    this.questionList.push({
        question: this.question,
        option1: this.option1,
        option2: this.option2,
        option3: this.option3,
        option4: this.option4,
        answer: this.answer,
        image: this.imgPath
    });
  }

  public onPaperSubmission(){
    if(this.isTestDetailIncomplete){
        return;
    }
    if(this.questionList.length === 0){
      return;
    }
    this.questionPaper = {
      testTitle: this.title,
      class_id: this.classId,
      description: this.questionDesc,
      endDate: this.endDate.toString(),
      startDate: this.startDate.toString(),
      institute_id: this.instituteId,
      public: false,
      subject_id: this.subjectId,
      questions: this.questionList
    }
    console.log(this.questionPaper);
    this._helper.submitTestPaper(this.questionPaper)
    .pipe(first(), takeUntil(this.unsubscribe$))
    .subscribe((res: Types.ITestPaperSubmissionResponse) =>{
      if(res.success){
        console.log("Paper created successfully");
      }
      else{
        console.log("Error")
      }
    }, (err: Error) =>{
      console.log(err);
    });
    console.log(this.questionPaper);
  }

  public onSubjectChange(event: any){
    this.subjectId = event.target.value;
    console.log(this.subjectId);
  }
  public onClassChange(event: any){
    this.classId = event.target.value;
  }
  public onInstituteChange(event: any){
    this.instituteId = event.target.value;
  }
  public onAnswerChange(event: any){
    this.answer = event.target.value;
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  
}