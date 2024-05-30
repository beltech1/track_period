import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FloatLabelModule } from "primeng/floatlabel"  


@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CalendarModule,FormsModule,FloatLabelModule,ReactiveFormsModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {

  date: Date[] | undefined;

}
