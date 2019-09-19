import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heade1Component } from './heade1.component';

describe('Heade1Component', () => {
  let component: Heade1Component;
  let fixture: ComponentFixture<Heade1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heade1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heade1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
