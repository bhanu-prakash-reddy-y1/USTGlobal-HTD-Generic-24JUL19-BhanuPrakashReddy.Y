import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  url='https://api.github.com/users';

  getData(){
   return this.http.get<any>('https://api.github.com/users');
  }

  deleteData(key){
    return this.http.delete<any>(`${this.url}/${key}`);
  }
}
