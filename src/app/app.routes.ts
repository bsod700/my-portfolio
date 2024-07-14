import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent:() => import('./pages/main/main.component').then(mod  => mod.MainComponent),
        data: { name: 'Guy Tagger Portfolio' }
    },
    { 
        path: 'projects/tierro', 
        loadComponent:() => import('./pages/projects/tierro/tierro.component').then(mod  => mod.TierroComponent),
        data: { name: 'Project Tierro' }
    },
    { path: '**', redirectTo: '' },
];
