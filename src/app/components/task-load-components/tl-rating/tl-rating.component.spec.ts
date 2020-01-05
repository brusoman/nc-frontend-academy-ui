import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlRatingComponent } from './tl-rating.component';

describe('TlRatingComponent', () => {
  let component: TlRatingComponent;
  let fixture: ComponentFixture<TlRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
