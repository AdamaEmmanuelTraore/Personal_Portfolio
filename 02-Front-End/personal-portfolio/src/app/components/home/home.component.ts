import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SectionCommon } from 'src/app/common/section/section.common';
import { PortfolioService } from 'src/app/services/portfolio.service';
import Typed from 'typed.js'; // Typed.js library

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  section: SectionCommon = new SectionCommon(1, '', '', '', '', '');
  currentSectionId: number = 1;
  typed!: Typed;
  isMobileView: boolean = false;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  showContent!: boolean;
  name: string = ' Traore Adama Emmanuel';

  constructor(
    private portfolioService: PortfolioService,
    // ACTIVATEDROUTE VIENE USATO PER ACCEDERE A UN DETERMINATO ID.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getHomeSection();
    });

    this.typedStrings();
  }

  /* DEVO SISTEMARE QUESTO CHE MI DA PROBLEMI CON IL ROUTING NEL MENU */
  public ngOnDestroy(): void {
    this.typed.destroy();
  }

  /* PER PORTARE LA FOTO SOTTO IN CASO DI SCHERMO PICCOLO */
  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    this.isMobileView = event.target.innerWidth < 725;
  }

  private getHomeSection(): void {
    // CONTROLLA SE IL PARAMETRO ID È DISPONIBILE
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // SE HA LA CATEGORIA ID, LEGGILO E CONVERTILO DA STRINGA A NUMERO
      this.currentSectionId = +this.route.snapshot.paramMap.get('id')!;    // ('')!: non è nullo
    } else {
      // IN CASO CONTRARIO, SE L'ID NON È DISPONIBILE PASSA DI DEFAULT ALL'ID 1
      this.currentSectionId = 1;
    }

    this.portfolioService.getSectionId(this.currentSectionId).subscribe(data => {
      console.log('Home section = ' + JSON.stringify(data));
      this.section = data;
    });
  }

  private typedStrings(): void {
    // ===== HOME PAGE INFO AUTO TYPED ===== //
    this.typed = new Typed('.typing', {
      strings: ['', 'Software engineer', 'Full-Stack Developer', 'Sport enthusiast'],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    });
  }

}
