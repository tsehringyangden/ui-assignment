import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  basicData: any;

  lineStylesData: any;

  basicOptions: any;
  options = {
    maintainAspectRatio: false,
    responsive: false
  }
  ngOnInit() {
    this.lineStylesData = {
      labels: ['Jan 1','Jan 3','Jan 6','Jan 9','Jan 12','Jan 15','Jan 18','Jan 21','Jan 24','Jan 27','Jan 30'],
      datasets: [
        {
          // label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45,33,44,22,11],
          fill: true,
          borderColor: '#6372F1',
          tension: .1,
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
      ]
    };
  }
}
