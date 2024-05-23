import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRecipePopupComponent } from './save-recipe-popup.component';

describe('SaveRecipePopupComponent', () => {
  let component: SaveRecipePopupComponent;
  let fixture: ComponentFixture<SaveRecipePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveRecipePopupComponent]
    });
    fixture = TestBed.createComponent(SaveRecipePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
