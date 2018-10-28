import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from '../Core/components/weather/weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherComponent]
})
export class CoreModule { }
