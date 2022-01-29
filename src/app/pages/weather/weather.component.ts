import { Weather } from './../../interfaces/weather.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather$!: Observable<Weather>;
  imgUrlWeather = 'https://openweathermap.org/img/wn';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
   console.log('Hello');
  }

  onSearch(city: string) {
    this.weather$ = this.weatherService.getWeatherByCity(city);
  }

}
