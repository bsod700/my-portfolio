import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent:() => import('./pages/main/main.component').then(mod  => mod.MainComponent),
        data: { name: 'Guy Tagger Portfolio' }
    },
    { 
        path: 'projects/ux/tierro', 
        loadComponent:() => import('./pages/projects/tierro/tierro.component').then(mod  => mod.TierroComponent),
        data: { name: 'Project Tierro' }
    },
    { 
        path: 'projects/ux/brushalong', 
        loadComponent:() => import('./pages/projects/brushalong/brushalong.component').then(mod  => mod.BrushalongComponent),
        data: { name: 'Project BrushAlong' }
    },
    { 
        path: 'projects/ux/portfolio', 
        loadComponent:() => import('./pages/projects/portfolio/portfolio.component').then(mod  => mod.PortfolioComponent),
        data: { name: 'Project Portfolio' }
    },
    { 
        path: 'projects/:category/:subcategory', 
        loadComponent:() => import('./pages/projects/more-projects/more-projects.component').then(mod  => mod.MoreProjectsComponent),
        data: { name: 'More Projects' }
    },
    { 
        path: 'projects/design/website-lps/:title', 
        loadComponent:() => import('./pages/projects/designs/websites-lps/websites-lps.component').then(mod  => mod.WebsitesLpsComponent),
        data: { name: 'Project Website :title' }
    },

    { path: '**', redirectTo: '' },
];
