import { Component, OnInit, Input } from '@angular/core';
import response from '../../interfaces/response';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  @Input() i: number = 0;
  @Input() dailyData: response = {
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
