import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegistrationTaskComponent } from './pre-registration-task.component';

describe('PreRegistrationTaskComponent', () => {
  let component: PreRegistrationTaskComponent;
  let fixture: ComponentFixture<PreRegistrationTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRegistrationTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreRegistrationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
