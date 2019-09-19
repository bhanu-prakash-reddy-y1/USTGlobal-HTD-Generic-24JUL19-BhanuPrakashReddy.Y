import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private http : HttpClient) { 
    
  }
  movieArray:any[]=[];
  searchMovies(movies){
    console.log(movies)
    this.http.get<any>(`http://www.omdbapi.com/?s=${movies}&apikey=bae836a8`)
    .subscribe(resData=>{
      this.movieArray=resData.Search;
      console.log(this.movieArray);
    })
  }


  ngOnInit() {
  }

}
