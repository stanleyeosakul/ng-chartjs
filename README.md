# Angular Charts.js
This project is based off of the YouTube tutorial [Integrating Charts.js with Angular 5 with Data from an API](https://www.youtube.com/watch?v=RTzi5DS7On4) by *Gary Simon*.  This app has been updated using Angular 7.

## Versions Used
* [Angular CLI](https://github.com/angular/angular-cli) v7.0.3
* Angular v7.0.1
* [Chart.js](https://www.chartjs.org/) v2.7.3

## Cloning the Project for Personal Use
### Installation
1. Clone this repo `git clone https://github.com/stanleyeosakul/ng-chartjs`
1. `cd` into the folder of the cloned repo
1. Run `yarn install` to install dependencies
1. Run `ng serve`, and navigate to `http://localhost:4200/`

# Changes to the Original Code
## Sample Data
The original tutorial uses [OpenWeatherMap](https://openweathermap.org/) for sample data.  However, since the video was released in December 2017, OpenWeatherMap has restricted access to this data from an API call.  The sample data has been replicated and stored in `assets/weather-data.json`, which is called by `weather.service.ts`.

## Displaying the Chart
In order to display the chart, the following code should be used in `weather.component.html`

```html
<div [hidden]="!chart">
  <canvas id="canvas">{{ chart }}</canvas>
</div>
```

The problem is that the canvas element doesn't exist as long as `*ngIf === false` and thus cannot be found by chart.js.
