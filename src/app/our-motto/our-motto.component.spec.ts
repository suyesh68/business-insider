import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMottoComponent } from './our-motto.component';

describe('OurMottoComponent', () => {
  let component: OurMottoComponent;
  let fixture: ComponentFixture<OurMottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
