import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaPageComponent } from './alpha-page.component';

describe('AlphaPageComponent', () => {
  let component: AlphaPageComponent;
  let fixture: ComponentFixture<AlphaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
