import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SectionCategoryCommon } from "../common/section-category/section-category.common";
import { AcademyExperienceCommon } from "../common/academy-experience/academy-experience.common";
import { FileCvCommon } from "../common/file-cv/file-cv.common";
import { SectionCommon } from "../common/section/section.common";
import { WorkExperienceCommon } from "../common/work-experience/work-experience.common";
import { PortfolioCommon } from "../common/portfolio/portfolio.common";
import { HobbyCommon } from "../common/hobby/hobby.common";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // QUI DEFINISCO L'URL(URL DEL BACK-END) DI BASE I VARI SERVIZI
  private sectionCategoryUrl = 'http://localhost:8080/api/section-category';
  private baseUrl = 'http://localhost:8080/api/section';
  private academyExperienceUrl = 'http://localhost:8080/api/academy-experience';
  private workExperienceUrl = 'http://localhost:8080/api/work-experience';
  private fileCvUrl = 'http://localhost:8080/api/pdf';
  private portfolioUrl = 'http://localhost:8080/api/portfolio';
  private hobbyUrl = 'http://localhost:8080/api/hobby';
  private contactForm = 'http://localhost:8080/sendMail';

  public pdfUrls = {
    fr: '../assets/Cv/FR - Adama_Emmanuel_Traore_CV.pdf',
    ita: '../assets/Cv/ITA - Adama_Emmanuel_Traore_CV.pdf',
    eng: '../assets/Cv/ENG - Adama_Emmanuel_Traore_CV.pdf'
  };

  constructor(private httpClient: HttpClient) { }

  // GET ALL SECTION CATEGORY SERVICE
  public getAllSectionCategory(): Observable<SectionCategoryCommon[]> {
    return this.httpClient.get<GetSectionCategoryCommon>(this.sectionCategoryUrl).pipe(
      map(response => response._embedded.sectionCategories)
    );
  }

  // GET SECTION SERVICE
  public getSection(): Observable<SectionCommon[]> {
    return this.httpClient.get<GetSectionCommon>(this.baseUrl).pipe(
      map(response => response._embedded.sections)
    );
  }

  // GET SECTION ID SERVICE
  public getSectionId(id: number): Observable<SectionCommon> {
    const sectionId = `${this.baseUrl}/${id}`;
    return this.httpClient.get<SectionCommon>(sectionId);
  }

  // GET ACADEMY EXPERIENCE SERVICE
  public getAcademyExperienceSection(): Observable<AcademyExperienceCommon[]> {
    return this.httpClient.get<GetAcademyExperienceCommon>(this.academyExperienceUrl).pipe(
      map(response => response._embedded.academyExperiences)
    );
  }

  // GET WORK EXPERIENCE SERVICE
  public getWorkExperienceSection(): Observable<WorkExperienceCommon[]> {
    return this.httpClient.get<GetWorkExperienceCommon>(this.workExperienceUrl).pipe(
      map(response => response._embedded.workExperiences)
    );
  }

  // GET FILE CV SERVICE
  public getFileCv(): Observable<FileCvCommon[]> {
    return this.httpClient.get<FileCvCommon[]>(this.fileCvUrl);
  }

  // DOWNLOAD CV SERVICE
  public downloadPdf(pdfUrl: string): Observable<Blob> {
    return this.httpClient.get(pdfUrl, { responseType: 'blob' });
  }

  // GET PORTFOLIO SERVICE
  public getPortfolio(): Observable<PortfolioCommon[]> {
    return this.httpClient.get<GetPortfolioCommon>(this.portfolioUrl).pipe(
      map(response => response._embedded.portfolios)
    );
  }

  // GET PORTFOLIO ID SERVICE
  public getPortfolioId(id: number): Observable<PortfolioCommon> {
    const portfolioId = `${this.portfolioUrl}/${id}`;
    return this.httpClient.get<PortfolioCommon>(portfolioId);
  }

  // GET HOBBY SERVICE
  public getHobby(): Observable<HobbyCommon[]> {
    return this.httpClient.get<GetHobbyCommon>(this.hobbyUrl).pipe(
      map(response => response._embedded.hobbies)
    );
  }

  //POST CONTACTFORM SERVICE
  public postContactForm(formData: any): Observable<any> {
    return this.httpClient.post(this.contactForm, formData);
  }

}

// CREO LE VARIE INTERFACCE

interface GetSectionCategoryCommon {
  _embedded: {
    sectionCategories: SectionCategoryCommon[];
  }
}

interface GetSectionCommon {
  _embedded: {
    sections: SectionCommon[];
  }
}

interface GetAcademyExperienceCommon {
  _embedded: {
    academyExperiences: AcademyExperienceCommon[];
  }
}

interface GetWorkExperienceCommon {
  _embedded: {
    workExperiences: WorkExperienceCommon[];
  }
}

interface GetPortfolioCommon {
  _embedded: {
    portfolios: PortfolioCommon[];
  }
}

interface GetHobbyCommon {
  _embedded: {
    hobbies: HobbyCommon[];
  }
}
