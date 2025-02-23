import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioCommon } from 'src/app/common/portfolio/portfolio.common';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent {

  portfolioDetails: PortfolioCommon = new PortfolioCommon(1, '', '', '', '', '');
  currentId: number = 1;
  faSun = faSun;
  faMoon = faMoon;
  currentTheme: string = 'light';

  constructor(
    private portfolioService: PortfolioService,
    // ACTIVATEDROUTE VIENE USATO PER ACCEDERE A UN DETERMINATO ID.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getPortfolioSectionId();
    });
  }

  public toggleTheme(): string {
    return this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }

  private getPortfolioSectionId(): void {
    // CONTROLLA SE IL PARAMETRO ID È DISPONIBILE
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // SE HA LA CATEGORIA ID, LEGGILO E CONVERTILO DA STRINGA A NUMERO
      this.currentId = +this.route.snapshot.paramMap.get('id')!;    // ('')!: non è nullo
    }

    this.portfolioService.getPortfolioId(this.currentId).subscribe(data => {
      console.log('Portfolio details section id = ' + JSON.stringify(data));
      this.portfolioDetails = data;
    });
  }

}
