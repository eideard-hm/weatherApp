import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  getLocation(): Promise<any> {

    const options =  {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej, options);
    })
  }

}
