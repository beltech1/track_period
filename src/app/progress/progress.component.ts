import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  constructor() { }
  @Input() progress: number = 0;



  ngOnInit(): void { }

  get progressBarClass(): string {
    if (this.progress < 20) {
      return 'green';
    } else if (this.progress < 40) {
      return 'blue';
    } else if (this.progress <50) {
      return 'orange';
    } else if (this.progress >=50 && this.progress<60) {
      return 'orange';
    } else if (this.progress >= 60) {
      return 'red';
    }
    return '';
  }
  
}
