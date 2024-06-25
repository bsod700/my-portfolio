import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent:() => import('./pages/main/main.component').then(mod  => mod.MainComponent),
        data: { name: 'Guy Tagger Portfolio' }
    },
    { path: '**', redirectTo: '/' },
];
