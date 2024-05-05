import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCatComponent } from './modifier-cat.component';

describe('ModifierCatComponent', () => {
  let component: ModifierCatComponent;
  let fixture: ComponentFixture<ModifierCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCatComponent]
    });
    fixture = TestBed.createComponent(ModifierCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
