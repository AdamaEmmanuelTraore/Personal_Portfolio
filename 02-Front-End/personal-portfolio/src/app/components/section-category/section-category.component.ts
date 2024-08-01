import { Component, OnInit } from '@angular/core';
import { SectionCategoryCommon } from 'src/app/common/section-category/section-category.common';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faHouseChimney, faUser, faBriefcase, faHeart, faComments } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-category',
  templateUrl: './section-category.component.html',
  styleUrls: ['./section-category.component.css']
})
export class SectionCategoryComponent implements OnInit {

  sectionCategory: SectionCategoryCommon[] = [];
  faHouseChimney = faHouseChimney;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faHeart = faHeart;
  faComments = faComments;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllSections();
  }

  public getAllSections(): void {
    this.portfolioService.getAllSectionCategory().subscribe(data => {
      console.log('Section category = ' + JSON.stringify(data));
      this.sectionCategory = data;
    });
  }

}
