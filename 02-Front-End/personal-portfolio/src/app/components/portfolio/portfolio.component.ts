import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioCommon } from 'src/app/common/portfolio/portfolio.common';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolios: PortfolioCommon[] = [];

  constructor(
    private portfolioService: PortfolioService,
    // ACTIVATEDROUTE VIENE USATO PER ACCEDERE A UN DETERMINATO ID.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPortfolioSection();
  }

  private getPortfolioSection(): void {
    this.portfolioService.getPortfolio().subscribe(data => {
      console.log('Portfolio section = ' + JSON.stringify(data));
      this.portfolios = data;
    });
  }

}
