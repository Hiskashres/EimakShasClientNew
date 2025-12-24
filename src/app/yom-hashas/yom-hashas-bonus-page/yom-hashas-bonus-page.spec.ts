import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasBonusPage } from './yom-hashas-bonus-page';

describe('YomHashasBonusPage', () => {
  let component: YomHashasBonusPage;
  let fixture: ComponentFixture<YomHashasBonusPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasBonusPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasBonusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
