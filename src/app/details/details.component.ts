import { Component } from '@angular/core';
import { CalenderComponent } from '../calender/calender.component';
import { ChartComponent } from '../chart/chart.component';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CalenderComponent,ChartComponent,ProgressComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  progress1: number = 0;
  progress2: number = 0;
  progress3: number = 0;
  progress4:number=0;
  progress5: number = 0;
  progress6:number=0;
  progress7:number=0;
  ngOnInit(): void {
    this.setProgress1(90);
    this.setProgress2(45);
    this.setProgress3(51);
this.setProgress4(80);
this.setProgress5(70);
this.setProgress6(100);
this.setProgress7(30);

  }
  setProgress1(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress1 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }

  setProgress2(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress2 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }

  setProgress3(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress3 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }
  setProgress4(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress4 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }
  setProgress5(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress5= value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }
  setProgress6(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress6 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }
  setProgress7(value: number) {
    if (value >= 0 && value <= 100) {
      this.progress7 = value;
    } else {
      console.error('Progress value must be between 0 and 100');
    }
  }
 

}
