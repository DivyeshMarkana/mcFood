import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodApiService } from 'src/app/services/food-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-dialog',
  templateUrl: './ingredient-dialog.component.html',
  styleUrls: ['./ingredient-dialog.component.scss']
})
export class IngredientDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ingredient) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
