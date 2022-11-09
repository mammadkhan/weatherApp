import { Component, OnInit, Input } from '@angular/core';
import response from '../../interfaces/response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
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
