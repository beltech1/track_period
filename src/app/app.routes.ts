import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AccountsComponent } from './accounts/accounts.component';

export const routes: Routes = [  { path: 'home', component: HomeComponent },
{ path: 'details', component: DetailsComponent },
{ path: 'accounts', component: AccountsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
];
