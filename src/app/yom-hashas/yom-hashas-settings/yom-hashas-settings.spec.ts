import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasSettings } from './yom-hashas-settings';

describe('YomHashasSettings', () => {
  let component: YomHashasSettings;
  let fixture: ComponentFixture<YomHashasSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
