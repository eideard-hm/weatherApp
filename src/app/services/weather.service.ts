import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Weather, Coord } from '../interfaces/weather.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _apiKey = environment.openWeather.key;
  private readonly _apiUrl = environment.openWeather.url;

  constructor(private http: HttpClient) { }

  getWeatherByCity(city : string): Observable<Weather>{
    return this.http.get<Weather>(`${this._apiUrl}/weather`, {
      params: {
        q: city,
        appid: this._apiKey,
        unit: 'metric'
      }
    });
  }

  getWeatherByCoords(coords : Coord): Observable<Weather>{
    return this.http.get<Weather>(`${this._apiUrl}/weather`, {
      params: {
        lat: coords.lat,
        lon: coords.lon,
        appid: this._apiKey,
        unit: 'metric'
      }
    });
  }

}


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
