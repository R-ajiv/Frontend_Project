import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'updates', component:UpdatesComponent},
    { path : 'about', component:AboutComponent}
];
