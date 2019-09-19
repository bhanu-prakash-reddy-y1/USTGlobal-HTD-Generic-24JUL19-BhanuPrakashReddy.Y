import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=eedc5461c6aa45bc9252e3336bb69f97')
    .subscribe(resData=>{
      this.sportsNews = resData.articles;
    })
  }


  ngOnInit() {
  }

}
