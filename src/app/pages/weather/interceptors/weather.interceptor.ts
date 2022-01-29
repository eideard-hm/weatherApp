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

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request);
    const cloneRequest = request.clone({
      params: request.params.appendAll({
        appid: environment.openWeather.key,
        units: 'metric'
      })
    });

    return next.handle(cloneRequest);
  }
}
