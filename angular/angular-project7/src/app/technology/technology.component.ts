import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologyNews:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=science&country=in&apiKey=eedc5461c6aa45bc9252e3336bb69f97')
    .subscribe(resData=>{
      this.technologyNews = resData.articles;
    })
  }

  ngOnInit() {
  }

}
