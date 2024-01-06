import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyExperienceCommon } from './academy-experience.common';

describe('AcademyExperienceCommon', () => {
  let component: AcademyExperienceCommon;
  let fixture: ComponentFixture<AcademyExperienceCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademyExperienceCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcademyExperienceCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
