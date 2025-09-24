import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodemonApi } from './podemon-api';

describe('PodemonApi', () => {
  let component: PodemonApi;
  let fixture: ComponentFixture<PodemonApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodemonApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodemonApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
