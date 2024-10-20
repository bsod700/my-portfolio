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
    { 
        path: 'projects/design/emails-banners/:title', 
        loadComponent:() => import('./pages/projects/designs/emails-banners/emails-banners.component').then(mod  => mod.EmailsBannersComponent),
        data: { name: 'Project Emails :title' }
    },
    { 
        path: 'projects/design/management/:title', 
        loadComponent:() => import('./pages/projects/designs/management/management.component').then(mod  => mod.ManagementComponent),
        data: { name: 'Project Management :title' }
    },
    { 
        path: 'projects/design/logos-marketing/:title', 
        loadComponent:() => import('./pages/projects/designs/logos-marketing/logos-marketing.component').then(mod  => mod.LogosMarketingComponent),
        data: { name: 'Project logos marketing :title' }
    },

    { path: '**', redirectTo: '' },
];
