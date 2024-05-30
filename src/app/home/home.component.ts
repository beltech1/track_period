import { Component } from '@angular/core';import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { CalenderComponent } from '../calender/calender.component';
import { InformationComponent } from '../information/information.component';
import { FooterComponent } from '../footer/footer.component';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    BodyComponent,
    CalenderComponent,
  InformationComponent,
FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}