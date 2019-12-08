import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Results} from '../interfaces/results';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiKey = 'fba4492cacb741cea03daba17101d100';
  private apiRoot = environment.apiRoot;
  private latest = this.apiRoot + 'top-headlines';
  private search = this.apiRoot + 'everything';
  keyword: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) { }
  static handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
  latestHeadlines(country: string): Observable<Results> {
    return this.http.get<Results>(this.latest + `?country=${country}&apiKey=${this.apiKey}`
    ).pipe(
        catchError(RequestService.handleError),

    );
  }
  searchArticles(keyword: string): Observable<Results> {
    return this.http.get<Results>(this.search + `?q=${keyword}&apiKey=${this.apiKey}`
    ).pipe(
      catchError(RequestService.handleError)
    );
  }

}

