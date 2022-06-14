import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDashboardComponent } from './components/food-dashboard/food-dashboard.component';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';

const routes: Routes = [
  {
    path: '', component: FoodDashboardComponent, pathMatch: 'full'
  },
  {
    path: 'foodDashboard', component: FoodDashboardComponent
  },
  {
    path: 'food/:id', component: FoodDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
