import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasUsersPage } from './yom-hashas-users-page';

describe('YomHashasUsersPage', () => {
  let component: YomHashasUsersPage;
  let fixture: ComponentFixture<YomHashasUsersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasUsersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
