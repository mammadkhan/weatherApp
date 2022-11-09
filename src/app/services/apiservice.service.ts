import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  api: string = 'https://api.open-meteo.com/v1/forecast?';

  constructor(private http: HttpClient) {}

  getWeather(lat: string, lon: string): Observable<any> {
    return this.http.get(
      `${this.api}latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
    );
  }
}
