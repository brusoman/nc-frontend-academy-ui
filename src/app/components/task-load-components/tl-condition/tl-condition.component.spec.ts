import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlConditionComponent } from './tl-condition.component';

describe('TlConditionComponent', () => {
  let component: TlConditionComponent;
  let fixture: ComponentFixture<TlConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
