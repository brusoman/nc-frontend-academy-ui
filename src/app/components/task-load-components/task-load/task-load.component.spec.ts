import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLoadComponent } from './task-load.component';

describe('TaskLoadComponent', () => {
  let component: TaskLoadComponent;
  let fixture: ComponentFixture<TaskLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
