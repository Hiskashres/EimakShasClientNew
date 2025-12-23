import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDafim } from './assign-dafim';

describe('AssignDafim', () => {
  let component: AssignDafim;
  let fixture: ComponentFixture<AssignDafim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignDafim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDafim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
