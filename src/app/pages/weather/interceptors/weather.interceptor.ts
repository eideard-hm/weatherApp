import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cloneRequest = request.clone({
      params: request.params.appendAll({
        appid: environment.openWeather.key,
        units: 'metric'
      })
    });

    return next.handle(cloneRequest);
  }
}
