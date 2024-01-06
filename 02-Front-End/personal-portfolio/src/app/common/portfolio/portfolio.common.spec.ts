import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCommon } from './portfolio.common';

describe('PortfolioCommon', () => {
  let component: PortfolioCommon;
  let fixture: ComponentFixture<PortfolioCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortfolioCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
