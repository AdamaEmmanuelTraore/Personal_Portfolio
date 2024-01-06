import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceCommon } from './work-experience.common';

describe('WorkExperienceCommon', () => {
  let component: WorkExperienceCommon;
  let fixture: ComponentFixture<WorkExperienceCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
