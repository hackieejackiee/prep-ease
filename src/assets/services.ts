import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GlobalConstants } from './const';
import * as Responses from './types';

@Injectable({
  providedIn: 'root',
})
export class HelperServices {
    // SET HEADERS
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*',
  });
    // SET OPTIONS FOR THE SERVICES
    public options = {
        headers: this.headers
      };
  constructor(private _http: HttpClient, private _url:GlobalConstants) { }

  //-----------------------Services for Login Page-------------------------

  public signin(emailId: string, password:string): Observable<Responses.ILoginResponse>{
    return this._http.post<Responses.ILoginResponse>(this._url.USER_AUTHENTICATION, {
      email: emailId,
      password: password
    }, this.options);
  }
  public getAllInstitutes(): Observable<Responses.IGetAllInstitutes> {
      return this._http.get<Responses.IGetAllInstitutes>(this._url.ALL_INSTITUTES, this.options);
  }

  public getAllClasses(): Observable<Responses.IGetAllClasses> {
    return this._http.get<Responses.IGetAllClasses>(this._url.ALL_CLASSES, this.options);
  }

  public getAllSubjects(): Observable<Responses.IGetAllSubjects> {
    return this._http.get<Responses.IGetAllSubjects>(this._url.ALL_SUBJECT, this.options);
  }

  public registerStudent(userDetail: Responses.IUserDetail): Observable<Responses.IRegistrationResponse> {
    return this._http.post<Responses.IRegistrationResponse>(this._url.STUDENT_REGISTRATION, {userDetail}, this.options);
  }

  public submitTestPaper(questionPaper: Responses.ITestPaperDetail): Observable<Responses.ITestPaperSubmissionResponse> {
    return this._http.post<Responses.ITestPaperSubmissionResponse>(this._url.CREATE_TEST_PAPER, {questionPaper}, this.options);
  }

  public uploadImage(fileData: FormData): Observable<Responses.IImageUploadResponse> {
    return this._http.post<Responses.IImageUploadResponse>(this._url.UPLOAD_IMAGE, fileData);
  }

  public getAllTest(classId: string, instituteId: string): Observable<Responses.ITestListDetail> {
    return this._http.post<Responses.ITestListDetail>(this._url.GET_All_TEST, {
      class_id: classId,
      institute_id:instituteId
    }, this.options)
  }

  public getQuestionPaper(testId: string): Observable<Responses.IQuestionPaperDetail> {
    // let httpParams = new HttpParams().set('id', testId)
    return this._http.get<Responses.IQuestionPaperDetail>(this._url.START_TEST+'/'+testId, { 
      headers : this.headers});
  }
  public submitTest(submitData: Responses.ISubmitAnswer): Observable<Responses.ITestResult> {
    return this._http.post<Responses.ITestResult>(this._url.SUBMIT_TEST, submitData, this.options);
  }
//-------------------------------------------------------------------------
}