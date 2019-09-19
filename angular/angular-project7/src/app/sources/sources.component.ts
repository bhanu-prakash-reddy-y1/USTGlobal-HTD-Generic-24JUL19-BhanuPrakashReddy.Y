import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  sourcesNews:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=sources&apiKey=eedc5461c6aa45bc9252e3336bb69f97')
    .subscribe(resData=>{
      this.sourcesNews = resData.articles;
    })
  }

  ngOnInit() {
  }

}
