import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Notfound } from './notfound/notfound';
import { PropertyBiding } from './lessons/property-biding/property-biding';
import { ButtonDisplay } from './exos/button-display/button-display';
export const routes: Routes = [
    {
        path: "home",
        component: Home,
    },
    {
        path: "about", loadComponent: () => import('./about/about').then(m => m.About) // LAZY LOADING
    },
    {
        path: "text", loadComponent: () => import('./lessons/text-interpolation/text-interpolation').then(m => m.TextInterpolation) // LAZY LOADING
    },
    {
        path: "bind", loadComponent: () => import('./lessons/property-biding/property-biding').then(m => m.PropertyBiding) // LAZY LOADING
    },
    {
        path: "event", loadComponent: () => import('./exos/event-biding/event-biding').then(m => m.EventBiding) // LAZY LOADING
    },
    {
        path: "tp", loadComponent: () => import('./exos/button-display/button-display').then(m => m.ButtonDisplay) // LAZY LOADING
    },
    {
        path:"**",
        component: Notfound
    }
];
