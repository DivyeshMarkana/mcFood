import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseURL = 'https://api.spoonacular.com/recipes/'
  apiKey = 'apiKey=4802f55cf83a4dccb9457e3a20eb5c88'

  constructor(private http: HttpClient) { }


  getRandomRecipe(): Observable<any> {
    const endpoint = 'random?number=50&'
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<any>(requestUrl)
  }

  getRecipeById(id: number){
    const endpoint = `${id}/information?`
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<any>(requestUrl)
  }

  getSimilarRecipe(id: number): Observable<Food[]>{
    const endpoint = `${id}/similar?`
    const requestUrl = this.baseURL + endpoint + this.apiKey
    return this.http.get<Food[]>(requestUrl)
  }
}

// https://api.spoonacular.com/food/ingredients/9152/information?apiKey=4802f55cf83a4dccb9457e3a20eb5c88
