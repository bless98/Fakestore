import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  TokenAPI = environment.URL;

 login(formData:any){}
 

 registerUser(user: any): Observable<any> {
   return this.http.post(`${this.TokenAPI}/auth/signup/`,user)
 }
getUser(){
 return this.http.get(`${this.TokenAPI}/auth/me`)
}
}
