import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes  = [
    {
      brand : 'hd-son',
      img : 'https://cdn.pixabay.com/photo/2016/03/27/17/59/vintage-1283299__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'tvs',
      img : 'https://cdn.pixabay.com/photo/2016/11/29/10/21/bike-rider-1868996__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'ktm',
      img : 'https://cdn.pixabay.com/photo/2014/12/16/03/37/motor-cycle-569865__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'royal enfiled',
      img : 'https://cdn.pixabay.com/photo/2014/04/23/20/34/dirt-bike-330815__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'hero honda',
      img : 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'schooty',
      img : 'https://cdn.pixabay.com/photo/2016/09/23/21/08/motorcycle-1690452__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    },
    {
      brand : 'apache 180',
      img : 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
      discription : 'A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle.[1] Motorcycle design varies greatly to suit a range of different purposes: long distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle rallies'
    }
  ]
  constructor() { }
  bikeData:any =  '';
  sendbike(bike){
    this.bikeData = bike;
  }
  ngOnInit() {
  }

}
