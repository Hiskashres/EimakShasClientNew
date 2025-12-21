import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasMain } from './yom-hashas-main';

describe('YomHashasMain', () => {
  let component: YomHashasMain;
  let fixture: ComponentFixture<YomHashasMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
