import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBiding } from './property-biding';

describe('PropertyBiding', () => {
  let component: PropertyBiding;
  let fixture: ComponentFixture<PropertyBiding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBiding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBiding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
