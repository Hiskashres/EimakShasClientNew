import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasAddDafim } from './yom-hashas-add-dafim';

describe('YomHashasAddDafim', () => {
  let component: YomHashasAddDafim;
  let fixture: ComponentFixture<YomHashasAddDafim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasAddDafim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasAddDafim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
