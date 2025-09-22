import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBidingExo } from './property-biding-exo';

describe('PropertyBiding', () => {
  let component: PropertyBidingExo;
  let fixture: ComponentFixture<PropertyBidingExo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBidingExo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBidingExo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
