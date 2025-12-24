import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasHeaderFooter } from './yom-hashas-header-footer';

describe('YomHashasHeaderFooter', () => {
  let component: YomHashasHeaderFooter;
  let fixture: ComponentFixture<YomHashasHeaderFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasHeaderFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasHeaderFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
