import { Component, OnInit } from '@angular/core';
import { HobbyCommon } from 'src/app/common/hobby/hobby.common';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  hobbies: HobbyCommon[] = [];

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.getHobbySection();
  }

  private getHobbySection(): void {
    this.portfolioService.getHobby().subscribe(data => {
      console.log('Hobby section = ' + JSON.stringify(data));
      this.hobbies = data;
    });
  }
}
