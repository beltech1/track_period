import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TabMenuModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'bi bi-house-dash', route: '/home' },
          { label: 'Details', icon: 'pi pi-home', route: '/details' },
          { label: 'Account', icon: 'bi bi-person-circle', route: '/accounts' },
      
      ];
  }
}
