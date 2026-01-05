import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiForm } from './api-form';

describe('ApiForm', () => {
  let component: ApiForm;
  let fixture: ComponentFixture<ApiForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
