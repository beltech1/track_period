import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FloatLabelModule,DialogModule,ButtonModule,InputTextModule,CalendarModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  greeting: string='';
  date: Date[] | undefined;

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  ngOnInit() {
      this.updateGreeting();
  }

  updateGreeting() {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
          this.greeting = 'Good Morning';
      } else if (currentHour < 18) {
          this.greeting = 'Good Afternoon';
      } else {
          this.greeting = 'Good Evening';
      }
  }
}
