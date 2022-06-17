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
  searchKey: string = ''

  constructor(private foodService: FoodApiService) { }

  ngOnInit(): void {

    this.foodService.getRandomRecipe().subscribe((response) => {
      this.foodList = response.recipes
      // this.searchKey = response.recipes
      console.log(this.foodList);
    })
  }

  foodID(id: number){
    alert(id)
  }
}
