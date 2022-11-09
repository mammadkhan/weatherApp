import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputAreaComponent } from './components/input-area/input-area.component';
import { OutputAreaComponent } from './components/output-area/output-area.component';
import { CardComponent } from './components/card/card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

import { WeatherCodePipe } from './pipes/weather-code.pipe';
import { WindSpeedPipe } from './pipes/wind-speed.pipe';
import { DatePipe } from './pipes/date.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { IconsPipe } from './pipes/icons.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputAreaComponent,
    OutputAreaComponent,
    CardComponent,
    MiniCardComponent,
    WeatherCodePipe,
    WindSpeedPipe,
    DatePipe,
    TemperaturePipe,
    IconsPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
