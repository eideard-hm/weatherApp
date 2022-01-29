import { Weather } from './../../interfaces/weather.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { GeolocationService } from '../../shared/services/geolocation.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather$!: Observable<Weather>;
  imgUrlWeather = 'https://openweathermap.org/img/wn';

  constructor(private weatherService: WeatherService,
    private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    if (navigator?.geolocation) {
      this.getLocation();
    }
  }

  onSearch(city: string) {
    this.weather$ = this.weatherService.getWeatherByCity(city);
  }

  private async getLocation() {
    try {
      const { coords }: GeolocationPosition = await this.geolocationService.getLocation();
      this.weather$ = this.weatherService.getWeatherByCoords(coords)
    } catch (error) {
      console.error(error);
    }
  }

}
