import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coord, Weather } from '@app/interfaces/weather.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _apiUrl = environment.openWeather.url;

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this._apiUrl}/weather`, {
      params: { q: city }
    });
  }

  getWeatherByCoords(coords: Coord): Observable<Weather> {
    return this.http.get<Weather>(`${this._apiUrl}/weather`, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude
      }
    });
  }

}


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
