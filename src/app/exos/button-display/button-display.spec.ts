import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisplay } from './button-display';

describe('ButtonDisplay', () => {
  let component: ButtonDisplay;
  let fixture: ComponentFixture<ButtonDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
