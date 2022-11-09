import { Component, OnInit, Input } from '@angular/core';
import response from 'src/app/interfaces/response';

@Component({
  selector: 'app-output-area',
  templateUrl: './output-area.component.html',
  styleUrls: ['./output-area.component.scss'],
})
export class OutputAreaComponent implements OnInit {
  forngfor: number[] = [0, 0, 0, 0, 0, 0];
  @Input() weatherData: response = {
    current_weather: {
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 0,
      time: '',
    },
    daily: {
      time: [],
      weathercode: [],
      temperature_2m_max: [],
      temperature_2m_min: [],
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
