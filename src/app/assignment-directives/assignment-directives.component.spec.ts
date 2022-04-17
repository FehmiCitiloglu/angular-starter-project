import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDirectivesComponent } from './assignment-directives.component';

describe('AssignmentDirectivesComponent', () => {
  let component: AssignmentDirectivesComponent;
  let fixture: ComponentFixture<AssignmentDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
