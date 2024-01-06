import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './services/portfolio.service';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionCategoryComponent } from './components/section-category/section-category.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SectionCategoryComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    HobbyComponent,
    ContactComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    PortfolioService
  ],  // MI PERMETTERA DI INIETTARE I SERVIZI IN ALTRI COMPONENTI
  bootstrap: [AppComponent]
})
export class AppModule { }
