import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyExperienceCommon } from 'src/app/common/academy-experience/academy-experience.common';
import { FileCvCommon } from 'src/app/common/file-cv/file-cv.common';
import { SectionCommon } from 'src/app/common/section/section.common';
import { WorkExperienceCommon } from 'src/app/common/work-experience/work-experience.common';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public section: SectionCommon = new SectionCommon(2, '', '', '', '', '');
  public academyExperience: AcademyExperienceCommon[] = [];
  public workExperience: WorkExperienceCommon[] = [];
  public fileCv: FileCvCommon[] = [];
  public currentSectionId: number = 2;
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
      this.getAboutSection();
    });

    this.getAcademyExperience();
    this.getWorkExperience();
    this.getCvData();
  }

  public toggleTheme(): string {
    return this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }

  public downloadFile(cv: FileCvCommon): void {
    let pdfUrl = '';

    if (cv.name.includes('French')) {
      pdfUrl = this.portfolioService.pdfUrls.fr;
    } else if (cv.name.includes('Italian')) {
      pdfUrl = this.portfolioService.pdfUrls.ita;
    } else if (cv.name.includes('English')) {
      pdfUrl = this.portfolioService.pdfUrls.eng;
    } else {
      console.error('Language not supported');
    }

    this.portfolioService.downloadPdf(pdfUrl).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Traore_Adama_Emmanuel_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Errore nel download del CV', error);
    }
    );
  }

  private getAcademyExperience(): void {
    this.portfolioService.getAcademyExperienceSection().subscribe(data => {
      console.log('Academy experience = ' + JSON.stringify(data));
      this.academyExperience = data;
    });
  }

  private getWorkExperience(): void {
    this.portfolioService.getWorkExperienceSection().subscribe(data => {
      console.log('Work experience = ' + JSON.stringify(data));
      this.workExperience = data;
    });
  }

  private getCvData(): void {
    this.portfolioService.getFileCv().subscribe(data => {
      this.fileCv = data;
    });
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
}
