import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShazComponent } from './shaz.component';

describe('ShazComponent', () => {
  let component: ShazComponent;
  let fixture: ComponentFixture<ShazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShazComponent]
    });
    fixture = TestBed.createComponent(ShazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
