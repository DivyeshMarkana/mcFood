import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodDashboardComponent } from './components/food-dashboard/food-dashboard.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrimNamePipe } from './pipes/trim-name.pipe';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodDashboardComponent,
    TrimNamePipe,
    FoodDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
