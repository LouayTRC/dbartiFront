import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecComponent } from './delete-rec.component';

describe('DeleteRecComponent', () => {
  let component: DeleteRecComponent;
  let fixture: ComponentFixture<DeleteRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRecComponent]
    });
    fixture = TestBed.createComponent(DeleteRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
