import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCvCommon } from './file-cv.common';

describe('FileCvCommon', () => {
  let component: FileCvCommon;
  let fixture: ComponentFixture<FileCvCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileCvCommon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FileCvCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
