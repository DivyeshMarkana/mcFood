import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodApiService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-food-dashboard',
  templateUrl: './food-dashboard.component.html',
  styleUrls: ['./food-dashboard.component.scss']
})
export class FoodDashboardComponent implements OnInit {

  foodList: Food[] = []

  constructor(private foodService: FoodApiService) { }

  ngOnInit(): void {

    this.foodService.getRandomRecipe().subscribe((response) => {
      this.foodList = response.recipes
      // console.log(this.foodList);
    })
  }
}
