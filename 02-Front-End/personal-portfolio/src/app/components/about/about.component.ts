import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyExperienceCommon } from 'src/app/common/academy-experience/academy-experience.common';
import { FileCvCommon } from 'src/app/common/file-cv/file-cv.common';
import { SectionCommon } from 'src/app/common/section/section.common';
import { WorkExperienceCommon } from 'src/app/common/work-experience/work-experience.common';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  section: SectionCommon = new SectionCommon(2, '', '', '', '', '');
  academyExperience: AcademyExperienceCommon[] = [];
  workExperience: WorkExperienceCommon[] = [];
  fileCv: FileCvCommon[] = [];
  currentSectionId: number = 2;

  constructor(
    private portfolioService: PortfolioService,
    // ACTIVATEDROUTE VIENE USATO PER ACCEDERE A UN DETERMINATO ID.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getAboutSection();
    });

    this.getAcademyExperience();
    this.getWorkExperience();
    this.getCv();
  }

  private getAboutSection(): void {
    // CONTROLLA SE IL PARAMETRO ID È DISPONIBILE
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // SE HA LA CATEGORIA ID, LEGGILO E CONVERTILO DA STRINGA A NUMERO
      this.currentSectionId = +this.route.snapshot.paramMap.get('id')!;    // ('')!: non è nullo
    }

    this.portfolioService.getSectionId(this.currentSectionId).subscribe(data => {
      console.log('About section = ' + JSON.stringify(data));
      this.section = data;

      // CHIAMO I DUE METODI DOPO L'INIZIALIZZAZIONE DI getAboutSection().

    });
  }

  public getAcademyExperience(): any {
    this.portfolioService.getAcademyExperienceSection().subscribe(data => {
      console.log('Academy experience = ' + JSON.stringify(data));
      this.academyExperience = data;
    });
  }

  public getWorkExperience(): any {
    this.portfolioService.getWorkExperienceSection().subscribe(data => {
      console.log('Work experience = ' + JSON.stringify(data));
      this.workExperience = data;
    });
  }

  public getCv(): any {
    this.portfolioService.getFileCv().subscribe(data => {
      console.log('CV file = ' + JSON.stringify(data));
      this.fileCv = data;
    });
  }

}
