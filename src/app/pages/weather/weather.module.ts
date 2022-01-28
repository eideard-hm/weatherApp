import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { SearchModule } from '../../components/search/search.module';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SearchModule,
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
