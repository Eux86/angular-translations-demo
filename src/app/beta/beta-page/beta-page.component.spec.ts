import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaPageComponent } from './beta-page.component';

describe('BetaPageComponent', () => {
  let component: BetaPageComponent;
  let fixture: ComponentFixture<BetaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
