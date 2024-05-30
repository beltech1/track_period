import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  constructor() {}

  ngOnInit() {
    this.setProgressBar(20); // Example usage: set the progress bar to 50% on initialization
  }

  setProgressBar(progress: number) {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      const percentage = Math.min(Math.max(progress, 0), 100); // Ensure progress is between 0 and 100
      progressBar.style.background = `conic-gradient(#f79489 0% ${percentage}%, rgba(209, 52, 52, 0.1) ${percentage}% 100%)`;
    }
  }
}
