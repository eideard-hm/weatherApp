import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { ComponentsModule } from '../components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherInterceptor } from './weather/interceptors/weather.interceptor';


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
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true}
  ]
})
export class WeatherModule { }
