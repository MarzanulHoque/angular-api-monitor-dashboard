import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiList } from './api-list';

describe('ApiList', () => {
  let component: ApiList;
  let fixture: ComponentFixture<ApiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
