import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomHashasControlPanel } from './yom-hashas-control-panel';

describe('YomHashasControlPanel', () => {
  let component: YomHashasControlPanel;
  let fixture: ComponentFixture<YomHashasControlPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YomHashasControlPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomHashasControlPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
