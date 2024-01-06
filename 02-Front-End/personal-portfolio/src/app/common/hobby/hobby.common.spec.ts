import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyCommon } from './hobby.common';

describe('HobbyCommon', () => {
  let component: HobbyCommon;
  let fixture: ComponentFixture<HobbyCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HobbyCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HobbyCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
