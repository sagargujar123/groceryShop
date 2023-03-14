import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private baseUrl="http://localhost:3000/userDetails";

  constructor(private http:HttpClient) { }
  saveUserDetails(userData:any){
    return this.http.post(this.baseUrl, userData);
  }
}
