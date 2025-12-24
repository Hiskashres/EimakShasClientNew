import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasDafimPage } from './yom-hashas-dafim-page';

describe('YomHashasDafimPage', () => {
  let component: YomHashasDafimPage;
  let fixture: ComponentFixture<YomHashasDafimPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasDafimPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasDafimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
