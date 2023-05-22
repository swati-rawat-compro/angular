import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Food } from '../shared/models/food';
import {StarRatingComponent} from 'angular-star-rating'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private fs: FoodserviceService) {}
  ngOnInit() {
    this.foods = this.fs.getAll();
    console.log(this.foods)
  }
  
}
