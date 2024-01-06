import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { HobbyComponent } from "./components/hobby/hobby.component";
import { ContactComponent } from "./components/contact/contact.component";
import { Error404Component } from "./components/errors/error404.component";
import { PortfolioDetailsComponent } from "./components/portfolio-details/portfolio-details.component";


export const routes: Routes = [
  { path: 'section-category/HOME', component: HomeComponent },
  { path: 'section-category/ABOUT', component: AboutComponent },
  { path: 'section-category/PORTFOLIO', component: PortfolioComponent },
  { path: 'section-category/PORTFOLIO/:id', component: PortfolioDetailsComponent },
  { path: 'section-category/HOBBY', component: HobbyComponent },
  { path: 'section-category/CONTACT', component: ContactComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/section-category/HOME', pathMatch: 'full' },
  { path: '**', redirectTo: '/section-category/HOME', pathMatch: 'full' }
];