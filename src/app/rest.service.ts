import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'http://localhost:3000/api/v1/admin/'
  constructor(private http: HttpClient) { }

  getApiData(){
  return this.http.get(this.apiUrl + 'index');
  }

  createAdmin(data: any) {
    return this.http.post('http://localhost:3000/api/v1/admin/create_admin', data);
  }

}
