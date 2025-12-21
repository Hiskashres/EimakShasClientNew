import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasDafimList } from './yom-hashas-dafim-list';

describe('YomHashasDafimList', () => {
  let component: YomHashasDafimList;
  let fixture: ComponentFixture<YomHashasDafimList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasDafimList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasDafimList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
