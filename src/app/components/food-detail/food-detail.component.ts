import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodApiService } from 'src/app/services/food-api.service';
import { MatDialog } from '@angular/material/dialog';
import { IngredientDialogComponent } from '../ingredient-dialog/ingredient-dialog.component';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  food: Food
  similar: Food[] = []

  constructor(private foodApi: FoodApiService,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.foodApi.getRecipeById(id).subscribe((response) => {
      console.log(response.extendedIngredients[0]);
      this.food = response

      // * Similar recipe by recipe id

      this.foodApi.getSimilarRecipe(id).subscribe((response) => {
        // console.log(response);
        this.similar = response
        for (const iterator of this.similar) {
          // console.log(iterator.title);

        }
      })
    })
  }

  getIngredientDetail(ingredient: Ingredient) {
    this.dialog.open(IngredientDialogComponent, {
      width: '400px',
      height: '580px',
      disableClose: true,

      data: {
        aisle: ingredient.aisle,
        amount: ingredient.amount,
        meta: ingredient.meta,
        nameClean: ingredient.nameClean,
        original: ingredient.original,
        originalName: ingredient.originalName,
        id : ingredient.id,
        name: ingredient.name,
        image : ingredient.image,
        consistency: ingredient.consistency,
        unit: ingredient.unit
      }
    })

    // alert(id);
    
  }

}
