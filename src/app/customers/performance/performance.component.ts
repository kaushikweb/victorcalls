import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  month = ['Jan','Feb','Mar','Apr'];
  leads = [50,60,20,90];
  chart = [];
  // canvas = <HTMLCanvasElement> document.getElementById("canvas");
  
  constructor() { }

  ngOnInit() {
    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: this.month,
    //     datasets: [
    //       {
    //         data: this.leads,
    //         borderColor: '#3cba9f',
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
 
  }

}
