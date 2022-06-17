import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseURL = 'https://api.spoonacular.com/'
  apiKey = 'apiKey=4802f55cf83a4dccb9457e3a20eb5c88'

  constructor(private http: HttpClient) { }


  getRandomRecipe(): Observable<any> {
    const endpoint = 'recipes/random?number=50&'
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<any>(requestUrl)
  }

  getRecipeById(id: number) {
    const endpoint = `recipes/${id}/information?`
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<any>(requestUrl)
  }

  getSimilarRecipe(id: number): Observable<Food[]> {
    const endpoint = `recipes/${id}/similar?`
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<Food[]>(requestUrl)
  }

  getIngredientById(id: number): Observable<Ingredient> {
    const endpoint = `food/ingredients/${id}/information?`
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<Ingredient>(requestUrl)
  }
}
// https://api.spoonacular.com/food/ingredients/11165/information?apiKey=4802f55cf83a4dccb9457e3a20eb5c88
// https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=4802f55cf83a4dccb9457e3a20eb5c88