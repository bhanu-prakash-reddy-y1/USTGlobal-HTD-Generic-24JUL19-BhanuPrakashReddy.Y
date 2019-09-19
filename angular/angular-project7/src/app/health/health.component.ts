import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNews:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=eedc5461c6aa45bc9252e3336bb69f97')
    .subscribe(resData=>{
      this.healthNews = resData.articles;
    })
  }

  ngOnInit() {
  }

}
