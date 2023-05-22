import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodserviceService {
  constructor() {}
  getAll(): Food[] {
    return [
      {
        id: 1,
        price: 332,
        name: 'Salad',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-1.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 2,
        price: 332,
        name: 'Pancakes',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-2.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 3,
        price: 332,
        name: 'Cheese Burger',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-3.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 4,
        price: 332,
        name: 'Agolio',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-4.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 5,
        price: 332,
        name: '',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-5.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 6,
        price: 332,
        name: 'Roti Subzi',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-6.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 7,
        price: 332,
        name: 'Pasta',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-7.jpeg',
        cookTime: '',
        origin: [],
      },
      {
        id: 8,
        price: 332,
        name: 'Vegetable pizza',
        favourite: false,
        star: 0,
        tags: [],
        imageUrl: '/assets/food-8.jpeg',
        cookTime: '',
        origin: [],
      },
    ];
  }
}
