import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchManagementComponent } from './launch-management.component';

describe('LaunchManagementComponent', () => {
  let component: LaunchManagementComponent;
  let fixture: ComponentFixture<LaunchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
