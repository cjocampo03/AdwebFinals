import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackpComponent } from './blackp.component';

describe('BlackpComponent', () => {
  let component: BlackpComponent;
  let fixture: ComponentFixture<BlackpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackpComponent]
    });
    fixture = TestBed.createComponent(BlackpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
