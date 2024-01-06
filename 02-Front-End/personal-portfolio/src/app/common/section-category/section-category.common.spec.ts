import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCategoryCommon } from './section-category.common';

describe('SectionCategoryCommon', () => {
  let component: SectionCategoryCommon;
  let fixture: ComponentFixture<SectionCategoryCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionCategoryCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SectionCategoryCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
