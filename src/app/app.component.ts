import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';
import response from './interfaces/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: response = {
    current_weather: {
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 100,
      time: '2022-01-01T00:00',
    },
    daily: {
      time: [
        '2022-01-01T00:00',
        '2022-01-01T00:00',
        '2022-01-01T00:00',
        '2022-01-01T00:00',
        '2022-01-01T00:00',
        '2022-01-01T00:00',
        '2022-01-01T00:00',
      ],
      weathercode: [100, 100, 100, 100, 100, 100, 100],
      temperature_2m_max: [0, 0, 0, 0, 0, 0, 0],
      temperature_2m_min: [0, 0, 0, 0, 0, 0, 0],
    },
  };
  // Seoul Korea
  defaultLat: string = '37.5665';
  defaultLon: string = '126.9780';
  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {
    this.api.getWeather(this.defaultLat, this.defaultLon).subscribe((res) => {
      this.data = res;
    });
  }

  onData(event: { lat: string; lon: string }): void {
    this.api.getWeather(event.lat, event.lon).subscribe((res) => {
      this.data = res;
    });
  }
}
