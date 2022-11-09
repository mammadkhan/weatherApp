import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
})
export class InputAreaComponent implements OnInit {
  @Output() data = new EventEmitter<{ lat: string; lon: string }>();
  errorMSG: string = '';
  lat: string = '';
  lon: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      /^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})$/.test(this.lat) &&
      /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$/.test(this.lon)
    ) {
      this.data.emit({ lat: this.lat, lon: this.lon });
      this.errorMSG = '';
      const element = document.querySelector('.output-area') as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.errorMSG = 'Koordinat düzgün daxil edilməyib!';
    }
  }

  currentLoc(): void {
    navigator.geolocation.getCurrentPosition((pos) => {
      let { latitude, longitude } = pos.coords;
      this.data.emit({ lat: latitude.toString(), lon: longitude.toString() });
      const element = document.querySelector('.output-area') as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
