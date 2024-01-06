import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCommon } from './section.common';

describe('SectionCommon', () => {
  let component: SectionCommon;
  let fixture: ComponentFixture<SectionCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SectionCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
