import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Projectspage } from './pages/projectspage/projectspage';

export const routes: Routes = [
    {path: '', component: Landingpage},
    {path: 'projectspage', component: Projectspage}
];
