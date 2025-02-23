import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { SectionCategoryCommon } from 'src/app/common/section-category/section-category.common';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public faSun = faSun;
  public faMoon = faMoon;
  public currentTheme: string = 'light';

  public selectedTitle: string = 'HOME';
  public sections: SectionCategoryCommon[] = [];

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.getSectionName();
  }

  public toggleTheme(): void {
    // Remove the current theme class
    this.renderer.removeClass(document.body, this.currentTheme);
    // Toggle the theme
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    // Add the new theme class
    this.renderer.addClass(document.body, this.currentTheme);
  }

  // estrai il nome della sezione dalla rotta attiva.
  private getSectionName(): void {
    // Elabora solo gli eventi finali di navigazione
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Ottieni l'URL corrente (ad esempio, '/sezione-categoria/HOME')
        const url = this.router.url;
        // Estrarre il nome della sezione
        const section = this.extractSectionFromUrl(url);
        if (section) {
          this.updateTitle(section);
        }
      });
  }

  private extractSectionFromUrl(url: string): string | null {
    // Regex per estrarre 'SECTION_NAME'
    const match = url.match(/\/section-category\/([^/]+)/);
    // Restituisce il nome della sezione o null se non trovato
    return match ? match[1] : null;
  }

  // Aggiorna il titolo in base alla sezione
  private updateTitle(section: string): void {
    this.portfolioService.getTitleBySection(section).subscribe((title) => {
      this.selectedTitle = title;
    });
  }
}
