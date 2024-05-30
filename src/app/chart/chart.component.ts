import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart'

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  data = {
    labels: ['mon','tues','wed','thus','fri','sat','sun'],
    datasets: [
      {
        label: 'Small Radius',
        data: [12,1,5,7,8,34,2],
       
        backgroundColor: "#f79489",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      }
    ]
  };
}
