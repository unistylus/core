import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeSoulComponent } from './customize-soul.component';

describe('CustomizeSoulComponent', () => {
  let component: CustomizeSoulComponent;
  let fixture: ComponentFixture<CustomizeSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
