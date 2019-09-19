import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url='https://angular-project-32b01.firebaseio.com/';

  constructor(private http: HttpClient) { }

  postData(data){

    return this.http.post(`${this.url}member.json`,data);

  }

  getData(){
    return this.http.get(`${this.url}member.json`).pipe(map(data => {
      let array:any[] = [];
      for(let key in data){
        array.push({...data[key], id:key})
      }
      return array;
    }))
  }

  deleteMember(key){
   return this.http.delete(`${this.url}member/${key}.json`)

  }
  updateMember(key,data){
    return this.http.put(`${this.url}member/${key}.json`,data);
   }
}
