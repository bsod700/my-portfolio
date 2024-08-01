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
    },{ 
        path: 'projects/brushalong', 
        loadComponent:() => import('./pages/projects/brushalong/brushalong.component').then(mod  => mod.BrushalongComponent),
        data: { name: 'Project BrushAlong' }
    },{ 
        path: 'projects/portfolio', 
        loadComponent:() => import('./pages/projects/portfolio/portfolio.component').then(mod  => mod.PortfolioComponent),
        data: { name: 'Project Portfolio' }
    },
    { path: '**', redirectTo: '' },
];
