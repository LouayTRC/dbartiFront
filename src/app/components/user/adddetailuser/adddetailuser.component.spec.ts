import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailuserComponent } from './adddetailuser.component';

describe('AdddetailuserComponent', () => {
  let component: AdddetailuserComponent;
  let fixture: ComponentFixture<AdddetailuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddetailuserComponent]
    });
    fixture = TestBed.createComponent(AdddetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
