import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateanimationComponent } from './navigateanimation.component';

describe('NavigateanimationComponent', () => {
  let component: NavigateanimationComponent;
  let fixture: ComponentFixture<NavigateanimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateanimationComponent]
    });
    fixture = TestBed.createComponent(NavigateanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
