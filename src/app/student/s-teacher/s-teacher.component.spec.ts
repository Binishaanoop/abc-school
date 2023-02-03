import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STeacherComponent } from './s-teacher.component';

describe('STeacherComponent', () => {
  let component: STeacherComponent;
  let fixture: ComponentFixture<STeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
