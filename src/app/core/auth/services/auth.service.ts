import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../../../shared/models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:5162/api";

  login(model: Auth): Observable<any>{
    let queryParams = new HttpParams();

    return this.http.post<any>(this.apiUrl+`/user/login`,model,{
      params:queryParams
    });
  }
}
