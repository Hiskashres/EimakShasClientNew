import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasechtaList } from './masechta-list';

describe('MasechtaList', () => {
  let component: MasechtaList;
  let fixture: ComponentFixture<MasechtaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasechtaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasechtaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
