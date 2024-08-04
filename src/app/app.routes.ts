import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "" , redirectTo : "home" , pathMatch: 'full'},
    {path: "home" ,  component:HomeComponent},
    {path: "about" ,  component:AboutComponent},
    {path: "CONTACT" , component:CONTACTComponent},
    {path: "porrfolio" , component:PortfolioComponent},


];
