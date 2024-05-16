import { Routes } from '@angular/router';
import { BackendPageComponent } from './components/backend-page/backend-page.component';
import { FrontendPageComponent } from './components/frontend-page/frontend-page.component';
import { HomeComponent } from './components/home/home.component';
import { FrameworksPageComponent } from './components/frameworks-page/frameworks-page.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'backend', component:BackendPageComponent},   
    {path: 'frontend', component:FrontendPageComponent},    
    {path: 'frameworks', component:FrameworksPageComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', redirectTo:'home', pathMatch:'full'},
];
