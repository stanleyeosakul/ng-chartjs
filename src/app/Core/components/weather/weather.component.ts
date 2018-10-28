import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {

  chart: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.dailyForecast()
      .subscribe (res => {

        // Obtain Max temp, Min temp, and Dates from JSON data
        let temp_max = res['list'].map(res => res.temp.max);
        let temp_min = res['list'].map(res => res.temp.min);
        let alldates = res['list'].map(res => res.dt);
        
        // Convert UNIX date to readable date
        let weatherDates = [];
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000);
          weatherDates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
        });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Sample Weather Data',
              fontSize: 24
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      }); 
  }

}
