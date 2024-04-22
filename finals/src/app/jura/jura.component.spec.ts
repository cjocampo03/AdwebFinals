import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuraComponent } from './jura.component';

describe('JuraComponent', () => {
  let component: JuraComponent;
  let fixture: ComponentFixture<JuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuraComponent]
    });
    fixture = TestBed.createComponent(JuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
