import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodApiService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  food: Food
  similar: Food[] = []

  constructor(private foodApi: FoodApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.foodApi.getRecipeById(id).subscribe((response) => {
      // console.log(response);
      this.food = response

      // * Similar recipe by recipe id

      this.foodApi.getSimilarRecipe(id).subscribe((response) => {
        console.log(response);
        this.similar = response
        for (const iterator of this.similar) {
          // console.log(iterator.title);

        }
      })
    })
  }

  getIngredientDetail(id: number) {
    alert(id);
  }

}
