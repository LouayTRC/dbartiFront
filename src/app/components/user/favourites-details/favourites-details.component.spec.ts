import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesDetailsComponent } from './favourites-details.component';

describe('FavouritesDetailsComponent', () => {
  let component: FavouritesDetailsComponent;
  let fixture: ComponentFixture<FavouritesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesDetailsComponent]
    });
    fixture = TestBed.createComponent(FavouritesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
