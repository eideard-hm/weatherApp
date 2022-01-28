import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    WeatherComponent,
  ]
})
export class WeatherModule { }
