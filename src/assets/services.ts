import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

  public checkValidUsername(username: string): Observable<Responses.ICheckUserNameRes> {
    return this._http.post<Responses.ICheckUserNameRes>(this._url.CHECK_USERNAME, {
      "username": username
    }, this.options);
  }

  public getAllInstitutes(): Observable<Responses.IGetAllInstitutes> {
      return this._http.get<Responses.IGetAllInstitutes>(this._url.ALL_INSTITUTES, this.options);
  }
//-------------------------------------------------------------------------
}