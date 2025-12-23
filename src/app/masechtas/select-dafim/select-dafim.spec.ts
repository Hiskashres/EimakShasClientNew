import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDafim } from './select-dafim';

describe('SelectDafim', () => {
  let component: SelectDafim;
  let fixture: ComponentFixture<SelectDafim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDafim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDafim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
